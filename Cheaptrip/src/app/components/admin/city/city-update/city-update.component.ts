import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CityService } from '../../../../services/city/city.service';
import { City } from '../../../../models/city/city.model';

@Component({
  selector: 'app-city-update',
  templateUrl: './city-update.component.html',
  styleUrls: ['./city-update.component.css']
})
export class CityUpdateComponent implements OnInit {

  city: City = {
    id: 0 ,
    name: ''
  }

  itemUpdated: boolean = false;

  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService
    ) { }

  ngOnInit(): void {
    this.checkParams();
  }

  /**
  * Check the routes params
  * Allows the user to get back to the page of the list where they were before (if they were on the item-list of this item)
  * With the same items displayed on the list
  */
  checkParams() {
    this.route.queryParams
    .subscribe(params => {

      if(params['lastPage']) {
        this.lastPage = params['lastPage'];
      }

      if(params['lastItemsViewed']) {
        this.lastItemsViewed = params['lastItemsViewed'];
      }

      if(params['id']) {
        this.city.id = params['id'];
        this.getCity();
      }else {
        this.router.navigate(['/site-admin/cities'],
        { queryParams: { lastPage: this.lastPage , lastItemsViewed: this.lastItemsViewed } });
      }
    });
  }

  /**
  * Get a city
  */
  getCity() {
    this.cityService.get(this.city.id)
    .subscribe(
      (result) => {
        this.city = result;
      },
      (error) => {
        console.log('There has been a getting that city');
        this.router.navigate(['/site-admin/cities']);
      }
    );
  }

  /**
  * When the form is submmited
  */
  onSubmit(): void {
    if( this.city.name != '') {
      this.updateCity();
    }
  }

  /**
  * Update a city
  */
  updateCity(): void {
    const data = {
      name: this.city.name
    }

    this.cityService.update(this.city.id,data)
    .subscribe(
      response => {
        this.itemUpdated= true;
        setTimeout(() =>
          {
            this.itemUpdated= false;
          },
          6000);
      },
      error => {
        console.log(error);
      }
    )
  }

  /**
  * Delete a city
  */
  deleteCity() {
    this.cityService.delete(this.city.id)
    .subscribe(
      (result) => {
        this.city = {
          id: 0 ,
          name: ''
        }
        this.router.navigate(['/site-admin/cities']);
      },
      (error) => {
        console.log('There has been a problem trying to delete the city');
      }
    );
  }

}
