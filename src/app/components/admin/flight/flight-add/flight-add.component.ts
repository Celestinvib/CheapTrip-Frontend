import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { FlightService } from '../../../../services/flight/flight.service';
import { Flight } from '../../../../models/flight/flight.model';
import { CityService } from '../../../../services/city/city.service';

@Component({
  selector: 'app-flight-add',
  templateUrl: './flight-add.component.html',
  styleUrls: ['./flight-add.component.css']
})
export class FlightAddComponent implements OnInit {

  form: any = {
    origin:undefined,
    destination:undefined,
    departure_date: undefined,
    arrival_date: undefined
    };

  flight: Flight = {
    origin:undefined,
    destination:undefined,
    departure_date: undefined,
    arrival_date: undefined
  }

  cities:any = null;

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;


  constructor(
    private flightService: FlightService,
    private cityService: CityService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCities();
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
    * When the form is submmited
    */
    onSubmit(): void {

      if(
        this.flight.origin != undefined &&
        this.flight.destination != undefined &&
        this.flight.departure_date != undefined &&
        this.flight.arrival_date != undefined  &&
        this.flight.arrival_date > this.flight.departure_date
        ) {
        this.saveFlight();
      }
    }

    /**
    * Save a flight
    */
    saveFlight(): void {

      const data = {
        origin: this.flight.origin,
        destination: this.flight.destination,
        departure_date: this.flight.departure_date,
        arrival_date: this.flight.arrival_date
      }
       this.flightService.create(data)
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
