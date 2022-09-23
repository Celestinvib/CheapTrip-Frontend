import { Component, OnInit } from '@angular/core';
import { FeatureService } from "../../../services/feature/feature.service";
import { CityService } from "../../../services/city/city.service";
import { City } from "../../../models/city/city.model";
import { Feature } from "../../../models/feature/feature.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  cities: City[] = [];
  features: Feature[] = [];

  constructor(private featureService: FeatureService, private cityService: CityService) { }

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
}
