import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../../services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../models/account/account.model';
import { TokenStorageService } from '../../../services/security/token-storage.service';

@Component({
  selector: 'app-profile-nav-bar',
  templateUrl: './profile-nav-bar.component.html',
  styleUrls: ['./profile-nav-bar.component.css']
})
export class ProfileNavBarComponent implements OnInit {

  account: Account = { }

  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService, private tokenStorage: TokenStorageService, private router: Router ) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.accountService.getAccountEmail(this.tokenStorage.getUser())
      .subscribe(
        (result) => {
          this.account = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take account info');
        }
      );
  }
}
