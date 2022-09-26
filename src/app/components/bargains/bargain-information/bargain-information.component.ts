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

  isBookmarked = false;
  isBooked = false;
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

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.getAccountId();
    }
    this.getBargain();


  }

  /**
* Check the routes params
* Allows the user to get back to the page of the list where they were before (if they were on the item-list of this item)
* With the same items displayed on the list
*/
  check() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]')
  }

  getBargain() {
    this.bargainService.get(this.id)
      .subscribe(
        (result) => {
          this.bargain = result;
          this.checkIfBookmarked();
          this.checkIfBooked();
        },
        (error) => {
          console.log('Was impossible to take bargain info');
        }
      );
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
          this.reloadPage();
        },
        (error) => {
          console.log('Was impossible to book the bargain');
        }
      )
  }

  checkIfBooked(){
    let bookings:BargainsAccounts[];
    this.bargainsAccountsService.getBookingsAccount(this.accountId)
    .subscribe(
      (result) => {
          bookings = result;
          for (let i = 0; i < bookings.length; i++) {
            if(bookings[i].bargain?.id == this.bargain.id){

              if(bookings[i].booked == 1) { //If it's booked
                this.isBooked = true;
              }
            }
          }
      },
      (error) => {
        console.log('Error');
      }
    );
  }

  checkIfBookmarked(){
    let bookmarkeds:BargainsAccounts[];
    this.bargainsAccountsService.getBookmarkedsAccount(this.accountId)
    .subscribe(
      (result) => {
          bookmarkeds = result;
          for (let i = 0; i < bookmarkeds.length; i++) {
            if(bookmarkeds[i].bargain?.id == this.bargain.id){

              if(bookmarkeds[i].bookmarked == 1) { //If it's bookmarked
                this.isBookmarked = true;
              }
            }
          }
      },
      (error) => {
        console.log('Error');
      }
    );
  }

  /**
  * Book and unbook a bargain
  */
  bookAndUnbook() {

    let bookingsAndBookmarks:BargainsAccounts[];

    let bookedOrBookmarked = false;

    this.bargainsAccountsService.getBookingsAccount(this.accountId)
    .subscribe(
      (result) => {
          bookingsAndBookmarks = result;
          for (let i = 0; i < bookingsAndBookmarks.length; i++) {
            if(bookingsAndBookmarks[i].bargain?.id == this.bargain.id){ //If the bargain id has been found that means that a booking or bookmarked has been done with this bargain and this account

              bookedOrBookmarked = true;

              this.bargainsAccountsService.updateBookedStatus(bookingsAndBookmarks[i].id,bookingsAndBookmarks[i]) //Books or unbooks the bargain for the account
                .subscribe(
                (result) => {
                  if(result[i]?.booked == 1) {
                    this.isBooked = true;
                  }else {
                    this.isBooked = false;
                  }
                }
                )
            }
          }

          if(!bookedOrBookmarked) {
            this.book();
            this.isBooked = true;
          }
      },
      (error) => {
        console.log('There has been an error');
      }
    );
  }


  /**
  * Bookmark and unbookmark a bargain
  */
  bookmarkAndUnbookmark() {

    let bookingsAndBookmarks:BargainsAccounts[];

    let bookedOrBookmarked = false;

    this.bargainsAccountsService.getBookmarkedsAccount(this.accountId)
    .subscribe(
      (result) => {
          bookingsAndBookmarks = result;
          for (let i = 0; i < bookingsAndBookmarks.length; i++) {
            if(bookingsAndBookmarks[i].bargain?.id == this.bargain.id){ //If the bargain id has been found that means that a booking or bookmarked has been done with this bargain and this account

              bookedOrBookmarked = true;

              this.bargainsAccountsService.updateBookmarkedStatus(bookingsAndBookmarks[i].id,bookingsAndBookmarks[i]) //Books or unbooks the bargain for the account
                .subscribe(
                (result) => {
                  if(result[i]?.bookmarked == 1) {
                    this.isBookmarked = true;
                  }else {
                    this.isBookmarked = false;
                  }
                }
                )
            }
          }

          if(!bookedOrBookmarked) {
            this.bookmark();
            this.isBookmarked = true;
          }
      },
      (error) => {
        console.log('There has been an error');
      }
    );
  }
}
