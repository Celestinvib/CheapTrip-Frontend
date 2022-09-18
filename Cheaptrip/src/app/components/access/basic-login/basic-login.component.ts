import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { TokenStorageService } from '../../../services/security//token-storage.service';
import { AccountService } from '../../../services/account/account.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.css']
})
export class BasicLoginComponent implements OnInit {
  form: any = {
    email:null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  user = '';
  userRole = '';

  constructor(private authService: AuthService,
     private tokenStorage: TokenStorageService,
     private accountService: AccountService,
     private router: Router,) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn=true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password)
    .subscribe(
      data => {
        this.tokenStorage.saveToken(JSON.stringify(data['token']).replace(/['"]+/g, ''));
        this.tokenStorage.saveUser((this.form.username));

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        let userDetails = this.accountService.getAccountEmail(this.form.email)


        userDetails.subscribe(
          result => {
            this.tokenStorage.saveRole(result.role);
          }
        );

      },
      err => {
        this.errorMessage = err;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
