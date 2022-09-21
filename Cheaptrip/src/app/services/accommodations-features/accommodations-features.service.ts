import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccommodationsFeatures } from '../../models/accommodations-features/accommodations-features.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/rasgos-alojamientos';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsFeaturesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<AccommodationsFeatures[]> {
    return this.http.get<AccommodationsFeatures[]>(baseUrl)
  }

  getFeaturesAccommodation(idAlojamiento:number): Observable<AccommodationsFeatures>  {
    return this.http.get(`https://pcn-cheaptrip-api.herokuapp.com/rasgos-alojamiento/${idAlojamiento}`)
  }

  get(id:number): Observable<AccommodationsFeatures>  {
    return this.http.get(`${baseUrl}/${id}`)
  }

  create(data: any):  Observable<any> {
    return this.http.post(baseUrl,data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
