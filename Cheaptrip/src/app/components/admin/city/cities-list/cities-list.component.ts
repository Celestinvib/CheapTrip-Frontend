import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../../services/city/city.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities:any = null;

  idCityToDelete:number = 0;

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
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


}
