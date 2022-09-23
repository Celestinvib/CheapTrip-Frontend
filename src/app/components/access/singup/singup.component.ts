import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from "../../../services/security/token-storage.service";
import { AuthService } from '../../../services/security/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['../style.css']
})
export class SingupComponent implements OnInit {
  form: any = {
    email: null,
    name: null,
    surnames: null,
    phone_number: null,
    birth_date: null,
    password: null,
    rpassword: null
  };

  isLoggedIn = false;
  isRegisterFailed = false;
  isRegisterSuccess = false;
  errorMessage = '';
  roles: string[] = [];
  user = '';
  userRole = '';
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
  }

  //Once you click on loggin or press enter
  onSubmit(): void {
    const { email, password, rpassword, name, surnames, phone_number, birth_date } = this.form;
    //Validates the inputs and proceeds to register
    if (this.formValid(email, password, rpassword, name, surnames, phone_number, birth_date)) {
      this.authService.register(name, surnames, email, password, phone_number, birth_date)
        .subscribe(
          data => {
            this.isRegisterFailed = false;
            this.isRegisterSuccess = true;

            //Past 4 seconds the user is sent to login
            setTimeout(() => {
              console.log("Successfully registered!");
              this.router.navigate(['/login']);
            },
              4000);

          },
          err => {
            console.log('error')
            this.errorMessage = err;
            this.isRegisterFailed = true;
            this.isRegisterSuccess = false;
          }
        );
    }
  }

  //check if the input is an email
  emailValid(email: string): boolean {
    const expression: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
    if (expression.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  //checks password lenght
  passwordValid(password: string): boolean {
    if (password.length >= 5) {
      return true;
    } else {
      return true;
    }
  }

  //checks if passwords match
  rPaswordValid(password: string, rpassword: string): boolean {
    if (password == rpassword) {
      return true;
    } else {
      return false;
    }
  }

  //checks if the input is empty or not
  isNotEmpty(s: string): boolean {
    if (s.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  //Validates all the inputs with the previous functions
  formValid(email: string, password: string, rpassword: string, name: string, surnames: string, phone_number: string, birth_date: string) {
    if (this.emailValid(email) && this.passwordValid(password) && this.rPaswordValid(password, rpassword)
      && this.isNotEmpty(name) && this.isNotEmpty(surnames) && this.isNotEmpty(phone_number) && this.isNotEmpty(birth_date)) {
      return true;
    } else {
      return false;
    }
  }

  //reloads the page
  reloadPage(): void {
    window.location.reload();
  }
}
