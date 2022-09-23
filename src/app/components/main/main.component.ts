import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { BargainService } from '../../services/bargain/bargain.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  bargains: any = null

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private router: Router) { }

  ngOnInit(): void {
    this.getBargains();

  }

  getBargains() {
    this.bargainService.getAll()
      .subscribe(
        (result) => {
          this.bargains = result;

        },
        (error) => {
          console.log('Was impossible to take bargain info');
        }
      );
  }
}
