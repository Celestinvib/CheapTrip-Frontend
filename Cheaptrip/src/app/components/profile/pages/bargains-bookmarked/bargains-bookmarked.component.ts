import { Component, OnInit } from '@angular/core';
import { BargainsAccountsService } from 'src/app/services/bargains-accounts/bargains-accounts.service';
import { TokenStorageService } from 'src/app/services/security/token-storage.service';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-bargains-bookmarked',
  templateUrl: './bargains-bookmarked.component.html',
  styleUrls: ['./bargains-bookmarked.component.css']
})
export class BargainsBookmarkedComponent implements OnInit {

  bookmarkeds: any = null

  accountId = 0;

  constructor(
    private bargainsAccountsService: BargainsAccountsService,
    private tokenStorage: TokenStorageService,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.getBookmarkeds();

  }

  getBookmarkeds() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
           this.accountId =  result.id;
           this.bargainsAccountsService.getBookmarkedsAccount(this.accountId)
            .subscribe(
              (result) => {
                this.bookmarkeds = result;
              }
        )},
        (error) => {
          console.log('Was impossible to get the bookmarkeds bargains');
        }
      )
  }
}
