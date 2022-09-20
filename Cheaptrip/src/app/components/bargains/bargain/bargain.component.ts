import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';

@Component({
  selector: 'app-bargain',
  templateUrl: './bargain.component.html',
  styleUrls: ['./bargain.component.css']
})
export class BargainComponent implements OnInit {

  bargain: Bargain = {
    id: 1,
    title: '',
    image: '',
    price: 0,
    description: ''
  }

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private router: Router) { }

  ngOnInit(): void {
    this.getBargain();
  }

  getBargain() {
    this.bargainService.get(this.bargain.id)
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
