import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { TokenStorageService } from '../../../services/security//token-storage.service';
import { AccountService } from '../../../services/account/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../style.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
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
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }


  onSubmit(): void {
    const { email, password } = this.form;
    if (this.emailValid(email)) {
      this.authService.login(email, password)
        .subscribe(
          data => {
            this.tokenStorage.saveToken(JSON.stringify(data['token']).replace(/['"]+/g, ''));
            this.tokenStorage.saveUser((this.form.email));
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            let userDetails = this.accountService.getAccountEmail(this.form.email)
            this.reloadPage();

            userDetails.subscribe(
              result => {
                this.tokenStorage.saveRole(result.role);
              }
            );

          },
          err => {
            console.log('error')
            this.errorMessage = err;
            this.isLoginFailed = true;
          }
        );
    }
  }

  emailValid(email: string): boolean {
    const expression: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
    if (expression.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}
