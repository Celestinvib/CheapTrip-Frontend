import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../../models/account/account.model';
import { Observable } from 'rxjs';

const baseUrl = "https://pcn-cheaptrip-api.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  /**
  * Get all the accounts
  */
  getAccounts(): Observable<any> {
    return this.http.get(baseUrl + "accounts",{ responseType: 'text'})
  }

  /**
  * Get an account
  */
    get(id:number): Observable<Account>  {
      return this.http.get(`${baseUrl}/${id}`)
    }

  /**
  * Get an account with a specified
  */
  getAccountEmail(email:string): Observable<any> {
    return this.http.get(baseUrl + "accounts/"+email)
  }


  /**
  * Get an account role
  */
  getAccontRole(): Observable<any> {
    return this.http.get(baseUrl + "obtener-rol",{ responseType: 'text'})
  }

  /**
  * Save an account
  */
   create(data: any):  Observable<any> {
    return this.http.post(baseUrl,data);
  }

  /**
  * Update an account
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`,data);
  }

  /**
  * Delete an account
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
