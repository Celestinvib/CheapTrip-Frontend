import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';

@Component({
  selector: 'app-bargain-information',
  templateUrl: './bargain-information.component.html',
  styleUrls: ['./bargain-information.component.css']
})
export class BargainInformationComponent implements OnInit {

  id: number = 0;

  bargain: Bargain = {}

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private router: Router) { }

  ngOnInit(): void {
    this.check();
    this.getBargains();
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

}
