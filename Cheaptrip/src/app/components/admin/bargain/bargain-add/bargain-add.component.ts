import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { BargainService } from '../../../../services/bargain/bargain.service';
import { Bargain } from '../../../../models/bargain/bargain.model';
import { AccommodationService } from '../../../../services/accommodation/accommodation.service';
import { FlightService } from '../../../../services/flight/flight.service';
import { Accommodation } from 'src/app/models/accommodation/accommodation.model';
import { Flight } from 'src/app/models/flight/flight.model';


@Component({
  selector: 'app-bargain-add',
  templateUrl: './bargain-add.component.html',
  styleUrls: ['./bargain-add.component.css']
})
export class BargainAddComponent implements OnInit {

  form: any = {
    title:undefined,
    image: undefined,
    price: undefined,
    description: undefined,
    expiration_date: undefined,
    outbound_flight: Flight,
    return_flight: Flight,
    accommodation: Accommodation
    };

  bargain: Bargain = {
    title:undefined,
    image: undefined,
    price: undefined,
    description: undefined,
    expiration_date: undefined,
    outbound_flight: {},
    return_flight: {},
    accommodation: {}
  }

  accommodations:Accommodation[] = [];

  flights:Flight[] = [];

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private bargainService: BargainService,
    private route: ActivatedRoute,
    private accommodationService: AccommodationService,
    private flightService: FlightService
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getAccommodations();
    this.getFlights();
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
    * When the form is submmited check every bargain item but the flights because they are not mandatory
    */
     onSubmit(): void {

      if( this.bargain.title != '' &&
      this.bargain.image != undefined &&
      this.bargain.price != undefined &&
      this.bargain.description != undefined &&
      this.bargain.expiration_date != undefined &&
      this.bargain.accommodation != undefined
     ) {
        this.saveBargain();
      }
    }

  /**
  * Get all the accommodations
  */
   getAccommodations() {
    this.accommodationService.getAll()
    .subscribe(
      (result) => {
        this.accommodations = result;
      },
      (error) => {
        console.log('There has been a problem');
      }
    );
  }

  /**
  * Get all the flights
  */
     getFlights() {
      this.flightService.getAll()
      .subscribe(
        (result) => {
          this.flights = result;
        },
        (error) => {
          console.log('There has been a problem');
        }
      );
    }



    /**
    * Save a bargain
    */
    saveBargain(): void {

      const data = {
        title: this.bargain.title,
        image: this.bargain.image,
        price: this.bargain.price,
        description: this.bargain.description,
        expiration_date: this.bargain.expiration_date,
        outbound_flight: this.bargain.outbound_flight,
        return_flight: this.bargain.return_flight,
        accommodation: this.bargain.accommodation
      }

      this.bargainService.create(data)
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
