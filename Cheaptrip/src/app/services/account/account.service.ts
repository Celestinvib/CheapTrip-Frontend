import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://pcn-cheaptrip-api.herokuapp.com/cuentas"

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<any> {
    return this.http.get(API_URL + "accounts",{ responseType: 'text'})
  }

  getAccountEmail(email:string): Observable<any> {
    return this.http.get(API_URL + "accounts/"+email)
  }
}
