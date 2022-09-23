import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../../models/feature/feature.model';
import { Observable } from 'rxjs';

const baseUrl = 'https://pcn-cheaptrip-api.herokuapp.com/rasgos';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http: HttpClient) { }

    /**
  * Get all the features
  */
     getAll(): Observable<Feature[]> {
      return this.http.get<Feature[]>(baseUrl)
    }

    /**
    * Get a feature
    */
    get(id:number): Observable<Feature>  {
      return this.http.get(`${baseUrl}/${id}`)
    }

    /**
    * Save a feature
    */
    create(data: any):  Observable<any> {
      return this.http.post(baseUrl,data);
    }

    /**
    * Update a feature
    */
    update(id: any, data: any): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`,data);
    }

    /**
    * Delete a feature
    */
    delete(id: any): Observable<any> {
      return this.http.delete(`${baseUrl}/${id}`);
    }
}
