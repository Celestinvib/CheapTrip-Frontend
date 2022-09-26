import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FeatureService } from "../../services/feature/feature.service";
import { CityService } from "../../services/city/city.service";
import { City } from "../../models/city/city.model";
import { Feature } from "../../models/feature/feature.model";
import { BargainService } from '../../services/bargain/bargain.service';
import { Bargain } from '../../models/bargain/bargain.model';
import { AccommodationsFeaturesService } from '../../services/accommodations-features/accommodations-features.service';
import { AccommodationService } from 'src/app/services/accommodation/accommodation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cities: City[] = [];
  features: Feature[] = [];
  maxPrice: number = 0;
  bargains: Bargain[] = [];
  filteredBargains: Bargain[] = [];
  filteredBargainsCity: Bargain[] = [];
  filteredBargainsPrice: Bargain[] = [];
  filteredBargainsCategory: Bargain[] = [];
  isEmpty:boolean = false;
  citySelected: any = 0;
  categorySelected: any = "";

  priceRange = 500;



  constructor(private activatedRoute: ActivatedRoute, private bargainService: BargainService, private router: Router, private featureService: FeatureService, private cityService: CityService, private accommodationsService: AccommodationService, private accommodationsFeaturesService: AccommodationsFeaturesService) { }

  ngOnInit(): void {
    this.getCities();
    this.getBargains();
  }

  /*
  /   Gets for bargains and cities
  */
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


  /*
  / Filter Queries
  */
  getBargainsMaxPrice() {
    this.bargainService.getAllWithSelectedMaxPrice(this.priceRange)
      .subscribe(
          (result) => {
            this.filteredBargainsPrice = result;

            this.filteredBargains = this.filteredBargainsPrice;
            //next filter
            if (this.citySelected != 0) {
              this.getBargainsCity();
            }else{
              if (this.categorySelected != "") {
                this.getBargainsCategory();
              }else{
                this.bargains = this.filteredBargains;
                if(this.bargains.length === 0){
                  this.isEmpty=true;
                }else{
                  this.isEmpty=false;
                }
              }
            }
          },
          (error) => {
            console.log('Was impossible to take maxPrice Bargain info');
          }
        );
  }
  getBargainsCity() {
    this.bargainService.getAllWithCity(this.citySelected)
      .subscribe(
          (result) => {
            this.filteredBargainsCity = result;
            if(this.filteredBargainsCity.length != 0){
              this.filteredBargains = this.filteredBargains.filter(o1 => this.filteredBargainsCity.some(o2 => o1.id === o2.id));
              this.isEmpty=false;
            }else{
              this.filteredBargains = [];
            }
            //next filter
            if (this.categorySelected != "") {
              this.getBargainsCategory();
            }else{
              this.bargains = this.filteredBargains;
              if(this.bargains.length === 0){
                this.isEmpty=true;
              }else{
                this.isEmpty=false;
              }
            }

          },
          (error) => {
            console.log('Was impossible to take city Bargain info');
          }
        );
  }
  getBargainsCategory() {
    this.bargainService.getAllWithCategory(this.categorySelected)
      .subscribe(
          (result) => {
            this.filteredBargainsCategory= result;
            if(this.filteredBargainsCategory.length != 0){
              this.filteredBargains = this.filteredBargains.filter(o1 => this.filteredBargainsCategory.some(o2 => o1.id === o2.id));
              this.isEmpty=false;
            }else{
              this.filteredBargains = [];
            }
            //Result of the filter
            this.bargains = this.filteredBargains;
            if(this.bargains.length === 0){
              this.isEmpty=true;
            }else{
              this.isEmpty=false;
            }
          },
          (error) => {
            console.log('Was impossible to take category Bargain info');
          }
        );
  }

  priceChanged(e:any) {
    this.priceRange = e.target.value;
  }

  applyFilters(){
    //price
    this.getBargainsMaxPrice();

  }

  citySelectedChange(e: any){
    this.citySelected = e.target.value;
  }

  categorySelectedChange(e: any){
    this.categorySelected = e.target.value;
  }

  reloadPage(): void {
    this.citySelected=0;
    this.categorySelected="";
    this.getBargains();
  }
}
