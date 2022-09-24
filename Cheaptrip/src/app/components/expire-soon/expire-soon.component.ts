import { Component, OnInit } from '@angular/core';

import { BargainService } from '../../services/bargain/bargain.service';

@Component({
  selector: 'app-expire-soon',
  templateUrl: './expire-soon.component.html',
  styleUrls: ['./expire-soon.component.css']
})
export class ExpireSoonComponent implements OnInit {

  bargains: any = null

  constructor( private bargainService: BargainService) { }

  ngOnInit(): void {
    this.getBargainsExpiringSoon();

  }

  getBargainsExpiringSoon() {
    this.bargainService.getExpiringSoon()
      .subscribe(
        (result) => {
          this.bargains = result;

        },
        (error) => {
          console.log('Was impossible to take bargains info');
        }
      );
  }

}
