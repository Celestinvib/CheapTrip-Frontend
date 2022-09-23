import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/security//token-storage.service';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['../style.css']
})
export class ForgotpasswordComponent implements OnInit {
  form: any = {
    email: null
  };

  isLoggedIn = false;

  constructor(private tokenStorage: TokenStorageService, private accountService: AccountService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { email } = this.form;
    console.log('EE')
    this.accountService.getAccountEmail(email)
        .subscribe(
          data => {
            alert(data);

          },
          err => {
            console.log('error')
          }
        );
  }

  doMailExists(email:string): boolean{
    if(this.accountService.getAccountEmail(email)){
      console.log(this.accountService.getAccountEmail(email))
      return true;
    }else{
      return false;
    }
  }
}
