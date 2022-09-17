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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService
    ) { }

  ngOnInit(): void {
    this.route.queryParams
        .subscribe(params => {
          this.city.id = params['id'];
          this.getCity();
        },
        (error) => {
          console.log(error);
        });
  }

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

  onSubmit(): void {
    if( this.city.name != '') {
      this.updateCity();
    }
  }

  updateCity(): void {
    this.cityService.update(this.city.id,this.city.name)
    .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

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
