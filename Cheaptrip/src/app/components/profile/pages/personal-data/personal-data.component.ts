import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../../models/account/account.model';
import { TokenStorageService } from '../../../../services/security/token-storage.service';
import { DialogDeleteProfileComponent } from '../../../dialogs/dialog-delete-profile/dialog-delete-profile.component';

import { MatDialog } from '@angular/material/dialog';

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

  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService, private tokenStorage: TokenStorageService, private router: Router,
    public dialog: MatDialog) { }

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
        this.deleteAccount();
      }
    }

   /**
    * When the form is submmited
    */
    deleteAccount() {
      this.accountService.delete(this.account.id)
      .subscribe(
        (result) => {
          this.tokenStorage.signOut();
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log('Was impossible to delete the account');
        }
      )
    }

    openDialog() {
      let dialogRef = this.dialog.open(DialogDeleteProfileComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result == 'true') {
          this.deleteAccount()
        }
      })
    }
}
