import { Component, OnInit } from '@angular/core';

import { AccountService } from "../../services/account/account.service";
import { BargainsAccountsService } from "../../services/bargains-accounts/bargains-accounts.service";
import { TokenStorageService } from '../../services/security/token-storage.service';
import { BargainsAccounts } from 'src/app/models/bargains-accounts/bargains-accounts.model';
import { Bargain } from 'src/app/models/bargain/bargain.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  bargains: Bargain[] = [];
  accountId = 0;
  empty = false;

  constructor(private bargainsAccountsService: BargainsAccountsService, private tokenStorage: TokenStorageService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getAccountId();

  }

  getAccountId() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
           this.accountId =  result.id;
           this.getBookmarkedBargains();
          },
        (error) => {
          console.log('Was impossible to get the id of the account');
        }
      );
  }

  getBookmarkedBargains() {
    let bookmarkeds:BargainsAccounts[];
    this.bargainsAccountsService.getBookmarkedsAccount(this.accountId)
      .subscribe(
        (result) => {
          bookmarkeds = result;
          for (let i = 0; i < bookmarkeds.length; i++) {
            this.bargains[i] = bookmarkeds[i].bargain!;
          }
          if (result.length == 0) {
            this.empty = true;
          }

        },
        (error) => {
          console.log('Was impossible to take bargains info');
        }
      );
  }
}
