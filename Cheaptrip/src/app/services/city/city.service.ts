import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../../models/city/city.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/ciudades';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }


  /**
  * Get all the cities
  */
  getAll(): Observable<City[]> {
    return this.http.get<City[]>(baseUrl)
  }

  /**
  * Get a city
  */
  get(id:number): Observable<City>  {
    return this.http.get(`${baseUrl}/${id}`)
  }

  /**
  * Save a city
  */
  create(data: any):  Observable<any> {
    return this.http.post(baseUrl,data);
  }

  /**
  * Update a city
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  /**
  * Delete a city
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
