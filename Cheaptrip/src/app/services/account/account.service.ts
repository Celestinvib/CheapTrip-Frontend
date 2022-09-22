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
   getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(baseUrl + "cuentas");
  }

  /**
  * Get an account
  */
    get(id:number): Observable<Account>  {
      return this.http.get(`${baseUrl}/cuenta/${id}`)
    }

  /**
  * Get an account with a specified
  */
  getAccountEmail(email:string): Observable<any> {
    return this.http.get(baseUrl + "cuentas/"+email)
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
   createAdmin(data: any):  Observable<any> {
    return this.http.post(`${baseUrl}/cuentas/admin`,data);
  }

  /**
  * Update an account
  */
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/cuentas/${id}`,data);
  }

  /**
  * Change the status of an account
  */
     changeStatus(id:number,data: any): Observable<any> {
      return this.http.put(`${baseUrl}/cuentas/cambiar-estado/${id}`,data);
    }


  /**
  * Delete an account
  */
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/cuentas/${id}`);
  }


}
