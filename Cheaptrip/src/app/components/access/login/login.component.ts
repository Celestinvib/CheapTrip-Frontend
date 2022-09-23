import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/security/auth.service';
import { TokenStorageService } from '../../../services/security//token-storage.service';
import { AccountService } from '../../../services/account/account.service';

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
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  /**
  * When the form is submmited
  */
  onSubmit(): void {
    const { email, password } = this.form;
    if (this.emailValid(email)) {
      this.authService.login(email, password)
        .subscribe(
          data => {
            this.tokenStorage.saveToken(JSON.stringify(data['token']).replace(/['"]+/g, '')); //Save a new token in the session storage
            this.tokenStorage.saveUser((this.form.email));//Save the email of the account as the 'user'

            //Indicates that the account has been succesfully log in
            this.isLoginFailed = false;
            this.isLoggedIn = true;

            this.accountService.getAccountRole().subscribe( //Get the roles of the current account
              result => {
                this.tokenStorage.saveRole(result.roles); //Saves them/it in the token
                this.reloadPage();
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

  /**
  * Check is an email is valid
  */
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
