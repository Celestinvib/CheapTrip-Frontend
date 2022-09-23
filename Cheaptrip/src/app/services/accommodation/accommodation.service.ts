import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accommodation } from '../../models/accommodation/accommodation.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/alojamientos';
@Injectable({
  providedIn: 'root'
})
export class AccommodationService {

  constructor(private http: HttpClient) { }

  /**
  * Get all the accommodations
  */
  getAll(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(baseUrl)
  }


  /**
  * Get an accommodation
  */
  get(id:number): Observable<Accommodation>  {
    return this.http.get(`${baseUrl}/${id}`)
  }


  /**
  * Get all the accommodations with a specified category
  */
  getAllWithThisCategory(category:string): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/categorias/${category}`);
  }

  /**
  * Get all the accommodations with the rating specified or upper it
  */
  getAllWithThisRatingOrUpper(rating:any): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/valoracion-minima/${rating}`);
  }

  /**
  * Get all the accommodations with a specified city
  */
  getAllWithThisCity(city_id:number): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/ciudades/${city_id}`);
  }


  /**
  * Save a accommodation
  */
  create(data: any): Observable<any> {
    return this.http.post(baseUrl,data);
  }


  /**
  * Update a accommodation
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }


  /**
  * Change the status of a accommodation
  */
  changeStatus(id:number,data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cambiar-estado/${id}`,data);
  }


  /**
  * Delete a accommodation
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
