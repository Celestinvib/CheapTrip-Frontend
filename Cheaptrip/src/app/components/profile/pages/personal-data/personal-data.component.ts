import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../../models/account/account.model';
import { TokenStorageService } from '../../../../services/security/token-storage.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

  itemUpdated: boolean = false;

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

  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
          this.account = result;
        },
        (error) => {
          console.log('Was impossible to take account info');
        }
      );
  }

  isDisabledButton(event: any) {

  }

   /**
    * When the form is submmited
    */
    onSubmit(): void {
      if(
        this.account.name != '',
        this.account.surnames != '',
        this.account.email != '',
        this.account.phone_number !=''
        ) {
        this.updateAccount();
      }
    }

     /**
      * Update an account
      */
      updateAccount(): void {

        const data = {
          name:  this.form.name,
          surnames:  this.form.surnames,
          email:  this.account.email,
          password:  this.account.password,
          phone_number:  this.form.phone_number,
          birth_date:  this.account.birth_date
        }

        // this.accountService.update(this.account.id, data)
        //  .subscribe(
        //    response => {
        //      //If the items is updated successfully
        //     this.itemUpdated= true; //it indicate it in the view with a popUp thanks to this var

        //     //Past 6 seconds the boolean is set to false therefore the item in the view disappear
        //      setTimeout(() =>
        //      {
        //        this.itemUpdated= false;
        //      },
        //      6000);
        //    },
        //    error => {
        //      console.log(error);
        //    }
        //  )
      }

}
