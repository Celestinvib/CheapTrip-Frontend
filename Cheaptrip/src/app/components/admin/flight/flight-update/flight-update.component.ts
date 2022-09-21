import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../../../../services/flight/flight.service';
import { Flight } from '../../../../models/flight/flight.model';
import { CityService } from '../../../../services/city/city.service';

@Component({
  selector: 'app-flight-update',
  templateUrl: './flight-update.component.html',
  styleUrls: ['./flight-update.component.css']
})
export class FlightUpdateComponent implements OnInit {

  form: any = {
    origin:undefined,
    destination:undefined,
    departure_date: undefined,
    arrival_date: undefined
    };

  flight: Flight = {
    origin: undefined,
    destination:undefined,
    departure_date: undefined,
    arrival_date: undefined
  }

  cities:any = null;

  itemUpdated: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private flightService: FlightService,
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router
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

          if(params['id']) {
            this.flight.id = params['id'];
            this.getFlight();
          }else {
            this.router.navigate(['/site-admin/cities'],
            { queryParams: { lastPage: this.lastPage , lastItemsViewed: this.lastItemsViewed } });
          }

        });
    }

  /**
  * Get a city
  */
    getFlight() {
      this.flightService.get(this.flight.id)
      .subscribe(
        (result) => {
          this.flight = result;
        },
        (error) => {
          console.log('There has been a getting that city');
          this.router.navigate(['/site-admin/flights']);
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
          this.updateFlight();
        }
      }

      /**
      * Update a flight
      */
       updateFlight(): void {

        const data = {
          origin: this.flight.origin,
          destination: this.flight.destination,
          departure_date: this.flight.departure_date,
          arrival_date: this.flight.arrival_date
        }

        this.flightService.update(this.flight.id, data)
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
  * Delete a flight
  */
  deleteFlight() {
    this.flightService.delete(this.flight.id)
    .subscribe(
      (result) => {
        this.router.navigate(['/site-admin/flights']);
      },
      (error) => {
        console.log('There has been a problem trying to delete the city');
      }
    );
  }


}
