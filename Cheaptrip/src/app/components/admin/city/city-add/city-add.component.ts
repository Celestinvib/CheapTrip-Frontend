import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { CityService } from '../../../../services/city/city.service';
import { City } from '../../../../models/city/city.model';


@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.css']
})
export class CityAddComponent implements OnInit {

  form: any = {
    name:null
    };

  city: City = {
    name: ''
  }

  constructor(
    private cityService: CityService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if( this.form.name != '') {
      this.saveCity();
    }
  }

  saveCity(): void {
    const data = {
      name: this.form.name
    }

    this.cityService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/site-admin/cities-list']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
