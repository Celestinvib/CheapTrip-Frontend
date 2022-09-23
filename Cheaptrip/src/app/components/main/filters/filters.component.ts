import { Component, OnInit } from '@angular/core';
import { FeatureService } from "../../../services/feature/feature.service";
import { CityService } from "../../../services/city/city.service";
import { City } from "../../../models/city/city.model";
import { Feature } from "../../../models/feature/feature.model";
import { BargainService } from '../../../services/bargain/bargain.service';
import { Bargain } from '../../../models/bargain/bargain.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  cities: City[] = [];
  features: Feature[] = [];
  price: number = 0;
  maxPrice: any = 0;
  bargains: Bargain[] = [];

  constructor(private featureService: FeatureService, private bargainService: BargainService, private cityService: CityService) { }

  ngOnInit(): void {
    this.getFeatures();
    this.getCities();
  }

  getFeatures() {
    this.featureService.getAll()
      .subscribe(
        (result) => {
          this.features = result;

        },
        (error) => {
          console.log('Was impossible to take features info');
        }
      );
  }

  getCities() {
    this.cityService.getAll()
      .subscribe(
        (result) => {
          this.cities = result;

        },
        (error) => {
          console.log('Was impossible to take cities info');
        }
      );
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

  getBargainsMaxPrice() {
    this.bargainService.getAllWithSelectedMaxPrice(this.price)
      .subscribe(
          (result) => {
            this.maxPrice = result;
          },
          (error) => {
            console.log('Was impossible to take maxPrice Bargain info');
          }
        );
  }
}
