import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../../services/city/city.service';

@Component({
  selector: 'app-cities-list',
  templateUrl: './cities-list.component.html',
  styleUrls: ['./cities-list.component.css']
})
export class CitiesListComponent implements OnInit {

  cities:any = null;

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


}
