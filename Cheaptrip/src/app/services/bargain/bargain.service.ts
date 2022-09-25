import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bargain } from '../../models/bargain/bargain.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/chollos';
@Injectable({
  providedIn: 'root'
})
export class BargainService {

  constructor(private http: HttpClient) { }


  /**
  * Get all the bargains displayed
  */
  getAll(): Observable<Bargain[]> {
    return this.http.get<Bargain[]>(baseUrl);
  }

  /**
  * Get all the bargains (hidden and displayed ones)
  */
     getReallyAll(): Observable<Bargain[]> {
      return this.http.get<Bargain[]>('https://pcn-cheaptrip-api.herokuapp.com/todos/chollos');
    }

  /**
  * Get all the bargains that expires soon
  */
    getExpiringSoon(): Observable<Bargain[]> {
      return this.http.get<Bargain[]>(baseUrl+'/expiran-pronto');
    }


  /**
  * Get all the bargains with the selected max price
  */
  getAllWithSelectedMaxPrice(maxPrice:number): Observable<Bargain[]> {
    return this.http.get<Bargain[]>(`${baseUrl}/maxprecio/${maxPrice}`);
  }


   /**
  * Get all the bargains with the selected accommodation
  */
    getAllWithAccommodation(accommodation_id:number): Observable<Bargain[]> {
      return this.http.get<Bargain[]>(`${baseUrl}/alojamiento/${accommodation_id}`);
    }

  /**
  * Get a bargain
  */
  get(id:number): Observable<Bargain>  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  /**
  * Save a bargain
  */
  create(data: any):  Observable<any> {
    return this.http.post(baseUrl,data);
  }

   /**
  * Update a bargain
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  /**
  * Change the status of a bargain
  */
  changeStatus(id:number,data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cambiar-estado/${id}`,data);
  }

  /**
  * Delete a bargain
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

}
