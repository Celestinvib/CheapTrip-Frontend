import { Component, OnInit } from '@angular/core';
import { FeatureService } from "../../../services/feature/feature.service";
import { CityService } from "../../../services/city/city.service";
import { City } from "../../../models/city/city.model";
import { Feature } from "../../../models/feature/feature.model";
import { BargainService } from '../../../services/bargain/bargain.service';
import { Bargain } from '../../../models/bargain/bargain.model';
import { AccommodationsFeaturesService } from '../../../services/accommodations-features/accommodations-features.service';
import { AccommodationsFeatures } from 'src/app/models/accommodations-features/accommodations-features.model';
import { AccommodationService } from 'src/app/services/accommodation/accommodation.service';
import { Accommodation } from 'src/app/models/accommodation/accommodation.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  cities: City[] = [];
  features: Feature[] = [];
  maxPrice: number = 0;
  bargains: Bargain[] = [];

  priceRange = 500;

  priceBargains: Bargain[] = [];
  featuresMap: Map<number, Accommodation[]> = new Map;
  citiesMap: Map<number, Accommodation[]> = new Map;
  bargainsMap: Map<number, Bargain[]> = new Map;


  constructor(private featureService: FeatureService, private bargainService: BargainService, private cityService: CityService, private accommodationsService: AccommodationService, private accommodationsFeaturesService: AccommodationsFeaturesService) { }

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

  getBargainsFeatures() {

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
    this.bargainService.getAllWithSelectedMaxPrice(this.maxPrice)
      .subscribe(
          (result) => {
            this.priceBargains = result;
          },
          (error) => {
            console.log('Was impossible to take maxPrice Bargain info');
          }
        );
  }

  //Asigns a list of accommodations to a city
  getAccomomdationsWithCity(city: City){
    this.accommodationsService.getAllWithThisCity(city.id)
    .subscribe(
      (result) => {
        this.citiesMap.set(city.id, result);
      },
      (error) => {
        console.log('Was impossible to take city info');
      }
    );
  }

  //Asigns a list of accommodations to a feature
  getAccomomdationsWithFeature(feature: Feature){
    let accFea:AccommodationsFeatures[];
    let accommodations:Accommodation[];
    this.accommodationsFeaturesService.getAccommodationsFeature(feature.id)
    .subscribe(
      (result) => {
        //gets accommodation features
        accFea = result;
        //gets accommodations from accommodation features
        for (let i = 0; i < accFea.length; i++) {
          accommodations[i] = accFea[i].accommodation || {};
        }
        //saves accommodation list in a map
        this.featuresMap.set(feature.id, accommodations);
      },
      (error) => {
        console.log('Was impossible to take city info');
      }
    );
  }

  priceChanged(e:any) {
    this.priceRange = e.target.value;
  }

  applyPrice(){
    this.getBargainsMaxPrice();
  }

  applyFilters(){
    alert('Borrando aplicación...');
  }
}
