import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Bargain } from 'src/app/models/bargain/bargain.model';
import { TokenStorageService } from '../../../services/security/token-storage.service';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/security/auth.service';


@Component({
  selector: 'app-bargain',
  templateUrl: './bargain.component.html',
  styleUrls: ['./bargain.component.css']
})
export class BargainComponent implements OnInit {

  @Input() bargain: Bargain = {}

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


  constructor (private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService,
    private tokenStorage: TokenStorageService, private accountService: AccountService) { }

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
  reloadPage(): void {
    window.location.reload();
  }

  emailValid(email: string): boolean {
    const expression: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i;
    if (expression.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
