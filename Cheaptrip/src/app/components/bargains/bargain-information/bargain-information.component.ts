import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';
import { Accommodation } from '../../../models/accommodation/accommodation.model';
import { AccommodationService } from 'src/app/services/accommodation/accommodation.service';

@Component({
  selector: 'app-bargain-information',
  templateUrl: './bargain-information.component.html',
  styleUrls: ['./bargain-information.component.css']
})
export class BargainInformationComponent implements OnInit {

  bargain: Bargain = {
    id: 1,
    title: '',
    image: '',
    price: 0,
    description: ''
  }

  accommodation: Accommodation = {
    id: 1,
    name: '',
    address: '',
    category: '',
    latitude: 0,
	  longitude: 0,
    rating: 0

  }

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private accomodationService: AccommodationService, private router: Router) { }

  ngOnInit(): void {
    this.getBargain();
    this.getAccommodation();
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

  getAccommodation() {
    this.accomodationService.get(this.accommodation.id)
      .subscribe(
        (result) => {
          this.accommodation = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take accomodation info');
        }
      );
  }
}
