import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = "https://pcn-cheaptrip-api.herokuapp.com/"

const httpOptions = {
  headers: new HttpHeaders ({ 'Content-Type' : 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(API_URL + 'login' , JSON.stringify({
      "email": email,
      "password": password
    }), { headers: { 'Content-Type': 'application/json'}});
  }

   register(email: string, password: string): Observable<any> {
     return this.http.post(API_URL + 'registrar' , {
      email,
       password
     }, httpOptions);
   }

}
