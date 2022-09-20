import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../../services/city/city.service';
import { TokenStorageService } from '../../../../services/security/token-storage.service';
import {  Router } from '@angular/router';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css'],

})
export class CitiesListComponent implements OnInit {

  cities:any = null;

  idCityToDelete:number = 0;

  //Pagination variables
  pageActual: number = 1;  //Current page of the table

  ItemsViewed: number = 5; //Items viewed in table

  //Auth variables
  isLoggedIn: boolean = false;

  role:string | undefined;

  token : string | null | undefined;

  constructor(
    private cityService: CityService,
    private router: Router,
    private route: ActivatedRoute,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {

    this.isLoggedIn = this.tokenStorage.getUser();

    this.token = this.tokenStorage.getToken();

      if (this.token != null)
      {
        this.role = this.tokenStorage.getRole()?.toString();

        this.checkParams();

        this.getCities();

      }else {
          this.router.navigate(['/login']);
      }
  }

  /**
  * Check the routes params
  * Allows the user to get back to the page of the list where they were before (if they were creating or updatin some item of the list)
  * With the same items displayed on the list
  */
  checkParams() {
    this.route.queryParams
    .subscribe(params => {
      if(params['lastPageActual']) {
        this.pageActual = params['lastPageActual'];
      }

      if(params['lastItemsViewed']) {
        this.ItemsViewed = params['lastItemsViewed'];
      }
    });
  }

  /**
  * Get all the cities
  */
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

  /**
  * Set the item that maybe is deleted
  * When clicking on the delete button on item in the list, the its id is saved, it will be used later on the delete modal to do so.
  * @param cityId id of the city that maybe is deleted
  */
  MaybeDeleteThisCity(cityId: number){
    this.idCityToDelete = cityId;
  }

  /**
  * Delete a city
  */
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

  /**
  * Reload the current page
  */
  reloadPage(): void {
    window.location.reload();
  }

  /**
  * Change the items viewed on the list (5,10 or 20)
  */
  changeItemsViewed(items:number): void {
    this.ItemsViewed = items;
  }

}
