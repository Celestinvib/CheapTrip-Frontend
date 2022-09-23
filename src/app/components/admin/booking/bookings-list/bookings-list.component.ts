import { Component, OnInit } from '@angular/core';
import { BargainsAccountsService } from '../../../../services/bargains-accounts/bargains-accounts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.css']
})
export class BookingsListComponent implements OnInit {

  bookings:any = null;

  idItemToChangeStatus:number = 0;

  idItemToDelete:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private bargainsAccountsService: BargainsAccountsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getBookings();
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
      * Get all the bookings
      */
      getBookings() {
        this.bargainsAccountsService.getBookings()
        .subscribe(
          (result) => {
            this.bookings = result;
          },
          (error) => {
            console.log('There has been a problem');
          }
        );
      }

      /**
      * Set the item that maybe is deleted
      * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
      * @param bookingId id of the booking that maybe is deleted
      */
      MaybeDeleteThisBooking(bookingId: number){
        this.idItemToDelete = bookingId;
      }

      /**
      * Delete a booking
      */
      deleteBooking() {
        this.bargainsAccountsService.delete(this.idItemToDelete)
        .subscribe(
          (result) => {
            this.reloadPage();
          },
          (error) => {
            console.log('There has been a problem trying to delete the booking');
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
