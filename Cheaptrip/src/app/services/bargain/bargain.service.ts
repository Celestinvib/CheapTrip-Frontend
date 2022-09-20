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

  getAll(): Observable<Bargain[]> {
    return this.http.get<Bargain[]>(baseUrl)
  }

  get(id:number): Observable<Bargain>  {
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
