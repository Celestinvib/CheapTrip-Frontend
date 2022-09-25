import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bargain } from '../../../models/bargain/bargain.model';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AccommodationsFeaturesService } from '../../../services/accommodations-features/accommodations-features.service';
import { AccommodationsFeatures } from 'src/app/models/accommodations-features/accommodations-features.model';

@Component({
  selector: 'app-bargain-accordion',
  templateUrl: './bargain-accordion.component.html',
  styleUrls: ['./bargain-accordion.component.css']
})
export class BargainAccordionComponent implements OnInit {

  @Input() bargain: Bargain = {};

  accountId: number = this.bargain.accommodation?.id;

  accommodationsFeatures: any = AccommodationsFeatures;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private domSanitizer: DomSanitizer, private http: HttpClient,
    private accommodationsFeaturesService: AccommodationsFeaturesService ) { }

  ngOnInit(): void {

  }

  getAccommodationsFeatures() {
    this.accommodationsFeaturesService.getFeaturesAccommodation(this.accountId)
        .subscribe(
          (result) => {
            this.accommodationsFeatures = result;
            console.log(result)
          },
          (error) => {
            console.log('Was impossible to take AccommodationFeatures info');
          }
        );
  }

}


