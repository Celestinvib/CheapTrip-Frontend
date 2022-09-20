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

  getAll(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(baseUrl)
  }

  get(id:number): Observable<Accommodation>  {
    return this.http.get(`${baseUrl}/${id}`)
  }

  getAllWithThisCategory(category:string): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/categorias/${category}`);
  }

  getAllWithThisRatingOrUpper(rating:any): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/valoracion-minima/${rating}`);
  }

  getAllWithThisCity(city_id:number): Observable<Accommodation[]>  {
    return this.http.get<Accommodation[]>(`${baseUrl}/ciudades/${city_id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  changeStatus(id:number,data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cambiar-estado/${id}`,data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
