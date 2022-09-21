import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../../../services/flight/flight.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {

  flights:any = null;

  idItemToDelete:number = 0;

  idItemToChangeStatus:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getFlights();
  }

   /**
  * Check the routes params
  * Allows the user to get back to the page of the list where they were before (if they were creating or updatin some item of the list)
  * With the same items displayed on the list
  */
    checkParams() {
      this.route.queryParams
      .subscribe(params => {
        if(params['lastPageActual']) {
          this.pageActual = params['lastPageActual'];
        }

        if(params['lastItemsViewed']) {
          this.ItemsViewed = params['lastItemsViewed'];
        }
      });
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
  * Set the item that maybe its status is changed
  * When clicking on the change status button on item in the list, the its id is saved, it will be used later on the change status modal to do so.
  * @param accommodationId id of the city that maybe is deleted
  */
     MaybeChangeStatusThisFlight(accommodationId: number){
      this.idItemToChangeStatus = accommodationId;
    }

    /**
    * Change status of an Flight
    */
    changeStatusFlight() {
      this.flightService.changeStatus(this.idItemToChangeStatus,null)
      .subscribe(
        (result) => {
          this.reloadPage();
        },
        (error) => {
          console.log('There has been a problem changing the flight');
        }
      );
    }

  /**
  * Set the item that maybe is deleted
  * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
  * @param accommodationId id of the city that maybe is deleted
  */
  MaybeDeleteThisFlight(accommodationId: number){
    this.idItemToDelete = accommodationId;
  }

  /**
  * Delete an Flight
  */
  deleteFlight() {
    this.flightService.delete(this.idItemToDelete)
    .subscribe(
      (result) => {
        this.reloadPage();
      },
      (error) => {
        console.log('There has been a problem trying to delete the flight');
      }
    );
  }

  /**
  * Reload the current page
  */
  reloadPage(): void {
    window.location.reload();
  }

  /**
  * Change the items viewed on the list (5,10 or 20)
  */
  changeItemsViewed(items:number): void {
    this.ItemsViewed = items;
  }


}
