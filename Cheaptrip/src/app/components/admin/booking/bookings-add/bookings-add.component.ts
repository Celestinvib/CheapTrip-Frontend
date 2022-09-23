import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { BargainsAccountsService } from '../../../../services/bargains-accounts/bargains-accounts.service';
import { BargainsAccounts } from '../../../../models/bargains-accounts/bargains-accounts.model';
import { BargainService } from 'src/app/services/bargain/bargain.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-bookings-add',
  templateUrl: './bookings-add.component.html',
  styleUrls: ['./bookings-add.component.css']
})
export class BookingsAddComponent implements OnInit {


  form: any = {
    bargain: undefined,
    account: undefined,
    booked: null
    };

  booking: BargainsAccounts = {
    bargain: undefined,
    account: undefined,
    booked: undefined
  }

  bargains:any = null;

  accounts:any = null;

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;

  constructor(
    private bargainService: BargainService,
    private accountService: AccountService,
    private bargainsAccountsService: BargainsAccountsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAccounts();
    this.getBargains();
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
  * Get all the bargains
  */
   getAccounts() {
    this.accountService.getAccounts()
    .subscribe(
      (result) => {
        this.accounts = result;
      },
      (error) => {
        console.log('There has been a problem');
      }
    );
  }

  /**
  * Get all the bargains
  */
  getBargains() {
    this.bargainService.getAll()
    .subscribe(
      (result) => {
        this.bargains = result;
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
        this.booking.bargain != undefined &&
        this.booking.account != undefined
        ) {
        this.saveBargainAccount();
      }
    }

    /**
    * Save a BargainAccount
    */
    saveBargainAccount(): void {

      const data = {
        bargain:  this.booking.bargain,
        account: this.booking.account,
        bookmarked: 1 //Sets the bookmarked active
      }
/*
       this.bargainsAccountsService.create(data)
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
       */
    }

}
