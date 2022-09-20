import { Component, OnInit } from '@angular/core';
import { AccommodationService } from '../../../../services/accommodation/accommodation.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accomomodation-list',
  templateUrl: './accomomodation-list.component.html',
  styleUrls: ['./accomomodation-list.component.css']
})
export class AccomomodationListComponent implements OnInit {

  accommodations:any = null;

  idItemToDelete:number = 0;

  idItemToChangeStatus:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private accommodationService: AccommodationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getAccommodations();
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
  * Get all the accommodations
  */
   getAccommodations() {
    this.accommodationService.getAll()
    .subscribe(
      (result) => {
        this.accommodations = result;
        console.log(result)
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
     MaybeChangeStatusThisAccommodation(accommodationId: number){
      this.idItemToDelete = accommodationId;
    }

    /**
    * Change status of an Accommodation
    */
    changeStatusAccommodation() {
      this.accommodationService.changeStatus(this.idItemToDelete,null)
      .subscribe(
        (result) => {
          this.reloadPage();
        },
        (error) => {
          console.log('There has been a problem trying to delete the city');
        }
      );
    }

  /**
  * Set the item that maybe is deleted
  * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
  * @param accommodationId id of the city that maybe is deleted
  */
  MaybeDeleteThisAccommodation(accommodationId: number){
    this.idItemToChangeStatus = accommodationId;
  }

  /**
  * Delete an Accommodation
  */
  deleteAccommodation() {
    this.accommodationService.delete(this.idItemToChangeStatus)
    .subscribe(
      (result) => {
        this.reloadPage();
      },
      (error) => {
        console.log('There has been a problem trying to delete the city');
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
