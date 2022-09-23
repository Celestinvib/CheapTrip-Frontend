import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/account/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../../../models/account/account.model';
import { TokenStorageService } from '../../../../services/security/token-storage.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.css']
})
export class PersonalDataComponent implements OnInit {

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
