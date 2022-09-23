import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../../models/flight/flight.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/vuelos';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http: HttpClient) { }

  /**
  * Get all the flights
  */
  getAll(): Observable<Flight[]> {
    return this.http.get<Flight[]>(baseUrl)
  }

  /**
  * Get all the flight
  */
  get(id:number): Observable<Flight>  {
    return this.http.get(`${baseUrl}/${id}`)
  }

  /**
  * Create a new flight
  */
  create(data: any):  Observable<any> {
    return this.http.post(baseUrl,data);
  }

  /**
  * Update a flight
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  /**
  * Change the status of a flight
  */
  changeStatus(id:number,data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cambiar-estado/${id}`,data);
  }

  /**
  * Delete a flight
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
