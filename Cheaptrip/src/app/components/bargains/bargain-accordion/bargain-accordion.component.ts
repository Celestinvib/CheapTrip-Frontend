import { Component, OnInit, Input, SecurityContext } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bargain } from '../../../models/bargain/bargain.model';
import { DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { AccommodationsFeaturesService } from '../../../services/accommodations-features/accommodations-features.service';
import { AccommodationsFeatures } from 'src/app/models/accommodations-features/accommodations-features.model';
import { BargainService } from '../../../services/bargain/bargain.service';

@Component({
  selector: 'app-bargain-accordion',
  templateUrl: './bargain-accordion.component.html',
  styleUrls: ['./bargain-accordion.component.css']
})
export class BargainAccordionComponent implements OnInit {

  @Input() bargain: Bargain = {};

  accommodationId: any;

  features: any;

  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private domSanitizer: DomSanitizer, private http: HttpClient,
    private accommodationsFeaturesService: AccommodationsFeaturesService, private bargainService: BargainService ) { }

  ngOnInit(): void {
    this.check();
    this.getAccommodationsFeatures();
  }


      /**
    * Check the routes params
    * Allows the user to get back to the page of the list where they were before (if they were on the item-list of this item)
    * With the same items displayed on the list
    */
    check() {
      this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || '[]')
    }

    getAccommodationsFeatures() {
      this.bargainService.get(this.id)
        .subscribe(
          (result) => {
            this.accommodationId = result.accommodation?.id;
            this.accommodationsFeaturesService.getFeaturesAccommodation(this.accommodationId)
            .subscribe(
          (result) => {
            this.features = result;
            console.log(result)
          }
          ,
          (error) => {
            console.log('Was impossible to take bargain info');
          }
        );
      }
    )}
}


