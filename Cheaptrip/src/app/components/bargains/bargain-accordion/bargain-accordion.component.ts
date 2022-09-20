import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../../../models/flight/flight.model';
import { FlightService } from 'src/app/services/flight/flight.service';
import { Bargain } from '../../../models/bargain/bargain.model';
import { BargainService } from '../../../services/bargain/bargain.service';

@Component({
  selector: 'app-bargain-accordion',
  templateUrl: './bargain-accordion.component.html',
  styleUrls: ['./bargain-accordion.component.css']
})
export class BargainAccordionComponent implements OnInit {

  bargain: Bargain = {
    id: 1,
    title: '',
    image: '',
    price: 0,
    description: ''
  }

  flight: Flight = {
    id: 1,
    origin: 1,
    destination: 1,

  }

  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private flightService: FlightService, private router: Router) { }

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

  getFlight() {
    this.flightService.get(this.flight.id)
      .subscribe(
        (result) => {
          this.flight = result;
          console.log('result ->' + result);

        },
        (error) => {
          console.log('Was impossible to take flight info');
        }
      );
  }
}
