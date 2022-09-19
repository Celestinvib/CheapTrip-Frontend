import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../../services/city/city.service';
import { TokenStorageService } from '../../../../services/security/token-storage.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],

})
export class CitiesListComponent implements OnInit {

  cities:any = null;

  idCityToDelete:number = 0;

  //Variables that manage pagination

  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  //Auth variables
  isLoggedIn: boolean = false;

  role:string | undefined;

  token : string | null | undefined;

  constructor(
    private cityService: CityService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    this.isLoggedIn = this.tokenStorage.getUser();

    this.token = this.tokenStorage.getToken();

      if (this.token != null)
      {
        this.role = this.tokenStorage.getRole()?.toString();
        console.log(this.role);
        this.getCities();
      }else {
          this.router.navigate(['/login']);
      }
  }

  getCities() {
    this.cityService.getAll()
    .subscribe(
      (result) => {
        this.cities = result;
      },
      (error) => {
        console.log('There has been a problem');
      }
    );
  }

  MaybeDeleteThisCity(cityId: number){
    this.idCityToDelete = cityId;
  }

  deleteCity() {
    this.cityService.delete(this.idCityToDelete)
    .subscribe(
      (result) => {
        this.reloadPage();
      },
      (error) => {
        console.log('There has been a problem trying to delete the city');
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  changeItemsViewed(items:number): void {
    this.ItemsViewed = items;
  }

}
