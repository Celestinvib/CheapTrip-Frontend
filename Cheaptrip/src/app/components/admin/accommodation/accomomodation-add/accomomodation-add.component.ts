import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../../../../services/accommodation/accommodation.service';
import { Accommodation } from '../../../../models/accommodation/accommodation.model';
import { CityService } from '../../../../services/city/city.service';
import { FeatureService } from '../../../../services/feature/feature.service';

@Component({
  selector: 'app-accomomodation-add',
  templateUrl: './accomomodation-add.component.html',
  styleUrls: ['./accomomodation-add.component.css']
})
export class AccomomodationAddComponent implements OnInit {

  form: any = {
    name:null,
    address: null,
    category: null,
    latitude: null,
	  longitude: null,
    rating: null,
    city_id: null
  };

  accommodation: Accommodation = {
    name:'',
    address: '',
    category: '',
    latitude: undefined,
	  longitude: undefined,
    rating: undefined,
    city_id: undefined
  }

  cities:any = null;

  features:any = null;

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private accommodationService: AccommodationService,
    private cityService: CityService,
    private featureService: FeatureService,
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
  * Get all the cities
  */
     getCities() {
      this.cityService.getAll()
      .subscribe(
        (result) => {
          this.cities = result;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
    }

    /**
    * Get all the features
    */
         getFeatures() {
          this.featureService.getAll()
          .subscribe(
            (result) => {
              this.features = result;
            },
            (error) => {
              console.log('There has been a problem');
            }
          );
        }

  /**
  * When the form is submmited
  */
  onSubmit(): void {

    if( this.accommodation.name != '') {
      this.saveAccommodation();
    }
  }

  /**
  * Save a accommodation
  */
  saveAccommodation(): void {

    const data = {
      name: this.accommodation.name
    }
     this.accommodationService.create(data)
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
