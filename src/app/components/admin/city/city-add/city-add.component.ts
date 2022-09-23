import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { CityService } from '../../../../services/city/city.service';
import { City } from '../../../../models/city/city.model';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  form: any = {
    name:null
    };

  city: City = {
    name: ''
  }

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
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

    });
  }

  /**
  * When the form is submmited
  */
  onSubmit(): void {

    if( this.city.name != '') {
      this.saveCity();
    }
  }

  /**
  * Save a city
  */
  saveCity(): void {

    const data = {
      name: this.city.name
    }
     this.cityService.create(data)
     .subscribe(
       response => {
         //If the items is added successfully
        this.itemAdded= true; //it indicate it in the view with a popUp thanks to this var

        //Past 6 seconds the boolean is set to false therefore the item in the view disappear
         setTimeout(() =>
         {
           this.itemAdded= false;
         },
         6000);

       },
       error => {
         console.log(error);
       }
     )
  }

}
