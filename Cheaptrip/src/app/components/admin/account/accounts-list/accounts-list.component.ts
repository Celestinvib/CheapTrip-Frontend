import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account/account.service';
import {  ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account/account.model';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  accounts:Account[] = [];

  idItemToDelete:number = 0;

  idItemToChangeStatus:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.checkParams();
    this.getAccounts();
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
* Get all the accounts
*/
getAccounts() {
  this.accountService.getAccounts()
  .subscribe(
    (result) => {
      this.accounts = result;
      console.log(this.accounts);
    },
    (error) => {
      console.log('There has been a problem');
    }
  );
}

/**
* Set the item that maybe its status is changed
* When clicking on the change status button on item in the list, the its id is saved, it will be used later on the change status modal to do so.
* @param accountId id of the account that maybe is updated
*/
   MaybeChangeStatusThisAccount(accountId: number){
    this.idItemToChangeStatus = accountId;
  }

  /**
  * Change status of an Account
  */
  changeStatusAccount() {
    this.accountService.changeStatus(this.idItemToChangeStatus,null)
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
* @param accountId id of the account that maybe is deleted
*/
MaybeDeleteThisAccount(accountId: number){
  this.idItemToDelete = accountId;
}

/**
* Delete an Account
*/
deleteAccount() {
  this.accountService.delete(this.idItemToDelete)
  .subscribe(
    (result) => {
      this.reloadPage();
    },
    (error) => {
      console.log('There has been a problem trying to delete the account');
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
