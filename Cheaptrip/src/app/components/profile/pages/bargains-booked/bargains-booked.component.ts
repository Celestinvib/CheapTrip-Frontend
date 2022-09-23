import { Component, OnInit } from '@angular/core';
import { BargainsAccountsService } from 'src/app/services/bargains-accounts/bargains-accounts.service';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-bargains-booked',
  templateUrl: './bargains-booked.component.html',
  styleUrls: ['./bargains-booked.component.css']
})
export class BargainsBookedComponent implements OnInit {

  bookings: any = null

  accountId = 0;

  idBookingMaybeUnbook = 0;

  constructor(
    private bargainsAccountsService: BargainsAccountsService,
    private tokenStorage: TokenStorageService,
    private accountService: AccountService
    ) { }

  ngOnInit(): void {
    this.getBookeds();

  }

  getBookeds() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
           this.accountId =  result.id;
           this.bargainsAccountsService.getBookingsAccount(this.accountId)
            .subscribe(
              (result) => {
                this.bookings = result;
              }
        )},
        (error) => {
          console.log('Was impossible to get the bookings');
        }
      )
  }

  setBookingIdThatMaybeisUnbook(id:any){
    this.idBookingMaybeUnbook = id;
  }

  /**
  * Unbook a bargain
  */
  unbook(bargainId:any) {
    this.bargainsAccountsService.getBookingsAccount(this.accountId)
    .subscribe(
      (result) => {
          let bookingsAndBookmarks = result;
          for (let i = 0; i < bookingsAndBookmarks.length; i++) {
            if(bookingsAndBookmarks[i].bargain?.id == bargainId){
              this.bargainsAccountsService.updateBookedStatus(bookingsAndBookmarks[i].id,bookingsAndBookmarks[i]) //Unbooks the bargain for the account
                .subscribe(
                (result) => {
                  this.getBookeds();
                }
                )
            }
          }
      },
      (error) => {
        console.log('There has been an error unbooking this bargain');
      }
    );
  }

}


