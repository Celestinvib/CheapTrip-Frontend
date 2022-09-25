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

  accommodations: Map<number, Accommodation[]> = new Map;
  priceBargains: Bargain[] = [];
  featuresMap: Map<number, Accommodation[]> = new Map;
  citiesMap: Map<number, Accommodation[]> = new Map;
  categoriesMap: Map<string, Accommodation[]> = new Map;
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
    this.bargainService.getAllWithSelectedMaxPrice(this.priceRange)
      .subscribe(
          (result) => {
            this.priceBargains = result;
            console.log(this.priceBargains);
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
        console.log('Was impossible to take Feature info');
      }
    );
  }

  //Asigns a list of accommodations to a category
  getAccomomdationsWithCategory(category: string){
    let accommodations:Accommodation[];
    this.accommodationsService.getAllWithThisCategory(category)
    .subscribe(
      (result) => {
        accommodations = result;

        //saves accommodation list in a map
        this.categoriesMap.set(category, accommodations);
      },
      (error) => {
        console.log('Was impossible to take city info');
      }
    );
  }

  //Creates an array for every available filter
  createAccommodationMaps(){
    let accmList: Map<number, Accommodation[]> = new Map;
    for (let i = 0; i < this.features.length; i++) {
      this.getAccomomdationsWithFeature(this.features[i]);
    }

    for (let i = 0; i < this.cities.length; i++) {
      this.getAccomomdationsWithCity(this.cities[i]);
    }

    //categories added manually
      this.getAccomomdationsWithCategory('Hostal o apartamento');
      this.getAccomomdationsWithCategory('Hotel 2');
      this.getAccomomdationsWithCategory('Hotel 3');
      this.getAccomomdationsWithCategory('Hotel 4');
      this.getAccomomdationsWithCategory('Hotel 5');
  }

  getBargainsWithAccommodation(accommodation: Accommodation){
    let bargains:Bargain[];
    this.bargainService.getAllWithAccommodation(accommodation.id)
    .subscribe(
      (result) => {
        bargains = result;
      },
      (error) => {
        console.log('Was impossible to take city info');
      }
    );
  }

  getBargainsToList(){
    let accmmList = Array.from(this.accommodations.values())
    for (let i = 0; i < accmmList.length; i++) {
      const element = accmmList[i];

    }
  }

  priceChanged(e:any) {
    this.priceRange = e.target.value;
  }

  applyFilters(){
    alert('Check log');
    this.getBargainsMaxPrice();
    this.bargains = this.bargains.concat(this.priceBargains);
  }

}
