import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { AccountService } from '../../../../services/account/account.service';
import { Account } from '../../../../models/account/account.model';
import { AuthService } from '../../../../services/security/auth.service';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {

  form: any = {
    account: 'user',
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

  itemAdded: boolean = false;

  //Pagination variables
  lastPage:number =1;

  lastItemsViewed:number = 5;


  constructor(
    private accountService: AccountService,
    private authService: AuthService,
    private route: ActivatedRoute
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

      });
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
        this.saveAccount();
      }
    }

    /**
    * Save an account
    */
    saveAccount(): void {

      const data = {
        name:  this.account.name,
        surnames:  this.account.surnames,
        email:  this.account.email,
        password:  this.account.password,
        phone_number:  this.account.phone_number,
        birth_date:  this.account.birth_date
      }

      if(this.form.account == 'admin')
      {
       this.accountService.createAdmin(data)
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
      }else {
        this.authService.register(this.account.name!, this.account.surnames!, this.account.email!, this.account.password!, this.account.phone_number!, this.account.birth_date!)
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

}
