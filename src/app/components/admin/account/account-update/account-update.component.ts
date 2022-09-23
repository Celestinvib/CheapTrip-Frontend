import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../../services/account/account.service';
import { Account } from '../../../../models/account/account.model';

@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {


  form: any = {
    name:'',
    surnames:'',
    email:'',
    password:'',
    phone_number:'',
    birth_date :undefined
    };

  account: Account = {
    name:'',
    surnames:'',
    email:'',
    password:'',
    phone_number:'',
    birth_date :undefined
    }

    itemUpdated: boolean = false;

    //Pagination variables
    lastPage:number =1;

    lastItemsViewed:number = 5;


  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
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

          if(params['id']) {
            this.account.id = params['id'];
            this.getAccount();
          }else {
            this.router.navigate(['/site-admin/accounts'],
            { queryParams: { lastPage: this.lastPage , lastItemsViewed: this.lastItemsViewed } });
          }

        });
    }

  /**
  * Get a Account
  */
    getAccount() {
      this.accountService.get(this.account.id)
      .subscribe(
        (result) => {
          this.account = result;
        },
        (error) => {
          console.log('There has been a getting that account');
          this.router.navigate(['/site-admin/accounts']);
        }
      );
    }

     /**
    * When the form is submmited
    */
      onSubmit(): void {

        if(
          this.account.name != '',
          this.account.surnames != '',
          this.account.email != '',
          this.account.password != '',
          this.account.phone_number !='',
          this.account.birth_date != undefined
          ) {
          this.updateAccount();
        }
      }

      /**
      * Update an account
      */
       updateAccount(): void {

        const data = {
          name:  this.account.name,
          surnames:  this.account.surnames,
          email:  this.account.email,
          password:  this.account.password,
          phone_number:  this.account.phone_number,
          birth_date:  this.account.birth_date
        }

        this.accountService.update(this.account.id, data)
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
  * Delete an account
  */
  deleteAccount() {
    this.accountService.delete(this.account.id)
    .subscribe(
      (result) => {
        this.router.navigate(['/site-admin/accounts']);
      },
      (error) => {
        console.log('There has been a problem trying to delete the account');
      }
    );
  }

}
