import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';
import { TokenStorageService } from '../../../services/security/token-storage.service';
import { AccountService } from '../../../services/account/account.service';
import { AuthService } from '../../../services/security/auth.service';
import { BargainsAccountsService } from '../../../services/bargains-accounts/bargains-accounts.service';
import { BargainsAccounts } from 'src/app/models/bargains-accounts/bargains-accounts.model';

@Component({
  selector: 'app-bargain-information',
  templateUrl: './bargain-information.component.html',
  styleUrls: ['./bargain-information.component.css']
})
export class BargainInformationComponent implements OnInit {

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

  id: number = 0;

  accountId = 0;

  bargain: Bargain = {}

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private router: Router, private authService: AuthService,
    private tokenStorage: TokenStorageService, private accountService: AccountService, private bargainsAccountsService: BargainsAccountsService) { }

  ngOnInit(): void {
    this.check();
    this.getAccountId();
    this.getBargains();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

  }

  /**
* Check the routes params
* Allows the user to get back to the page of the list where they were before (if they were on the item-list of this item)
* With the same items displayed on the list
*/
  check() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]')
  }

  getBargains() {
    this.bargainService.get(this.id)
      .subscribe(
        (result) => {
          this.bargain = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take bargain info');
        }
      );
  }

  checkIfBooked() {
    this.bargainsAccountsService.getBooking(this.accountId)
    .subscribe(
      (result) => {
        let bookings = result;

      }
    )
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

  getAccountId() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
           this.accountId =  result.id;
          },
        (error) => {
          console.log('Was impossible to get the id of the account');
        }
      );
  }

  book() {
      const data = {
        bargain:  {
          id: this.bargain.id
        },
        account: {
          id: this.accountId
        }
    }

      this.bargainsAccountsService.createBooking(data)
      .subscribe(
        (result) => {
          console.log('Reservado: '+ result);
        },
        (error) => {
          console.log('Was impossible to book the bargain');
        }
      )
  }


  bookmark() {
    const data = {
      bargain:  {
        id: this.bargain.id
      },
      account: {
        id: this.accountId
      }
    }
      this.bargainsAccountsService.createBookmarked(data)
      .subscribe(
        (result) => {
          console.log('Favorito: '+ result);
        },
        (error) => {
          console.log('Was impossible to book the bargain');
        }
      )
  }

}
