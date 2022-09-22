import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { AccommodationService } from '../../../../services/accommodation/accommodation.service';
import { Accommodation } from '../../../../models/accommodation/accommodation.model';
import { CityService } from '../../../../services/city/city.service';
import { FeatureService } from '../../../../services/feature/feature.service';
import { City } from 'src/app/models/city/city.model';

@Component({
  selector: 'app-accomomodation-update',
  templateUrl: './accomomodation-update.component.html',
  styleUrls: ['./accomomodation-update.component.css']
})
export class AccomomodationUpdateComponent implements OnInit {

  form: any = {
    name:null,
    address: null,
    category: null,
    latitude: null,
	  longitude: null,
    rating: null,
    city: {}
  };

  accommodation: Accommodation = {
  }

  cities:any = null;

  features:any = null;

  itemUpdated: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private accommodationService: AccommodationService,
    private cityService: CityService,
    private featureService: FeatureService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getCities();
    this.getFeatures();
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
        this.accommodation.id = params['id'];
        this.getAccommodation();
      }else {
        this.router.navigate(['/site-admin/accomodations'],
        { queryParams: { lastPage: this.lastPage , lastItemsViewed: this.lastItemsViewed } });
      }

    });
  }


    /**
  * Get a Accommodation
  */
     getAccommodation() {
      this.accommodationService.get(this.accommodation.id)
      .subscribe(
        (result) => {
          this.accommodation = result;
        },
        (error) => {
          console.log('There has been a getting that accommodation');
          this.router.navigate(['/site-admin/accommodations']);
        }
      );
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

      if(
      this.accommodation.name != '' &&
      this.accommodation.address != '' &&
      this.accommodation.category != '' &&
      this.accommodation.latitude != undefined &&
      this.accommodation.longitude!= undefined  &&
      this.accommodation.rating != undefined &&
      this.accommodation.city != undefined
      ) {
        this.updateAccommodation();
      }
    }

          /**
      * Update an accommodation
      */
       updateAccommodation(): void {

        const data = {
          address: this.accommodation.address,
          category: this.accommodation.category,
          latitude: this.accommodation.latitude,
          longitude: this.accommodation.longitude,
          rating: this.accommodation.rating,
          city_id: this.accommodation.city
        }

        this.accommodationService.update(this.accommodation.id, data)
         .subscribe(
           response => {
             //If the items is updated successfully
            this.itemUpdated= true; //it indicate it in the view with a popUp thanks to this var

            //Past 6 seconds the boolean is set to false therefore the item in the view disappear
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
  * Delete an accommodation
  */
  deleteAccommodation() {
    this.accommodationService.delete(this.accommodation.id)
    .subscribe(
      (result) => {
        this.router.navigate(['/site-admin/accommodations']);
      },
      (error) => {
        console.log('There has been a problem trying to delete the flight');
      }
    );
  }


}
