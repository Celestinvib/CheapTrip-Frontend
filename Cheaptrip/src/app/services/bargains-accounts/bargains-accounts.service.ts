import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BargainsAccounts } from '../../models/bargains-accounts/bargains-accounts.model';
import { Observable } from 'rxjs';


const resUrl = 'https://pcn-cheaptrip-api.herokuapp.com/reservas';
const bargainAccountUrl = 'https://pcn-cheaptrip-api.herokuapp.com/chollos-cuentas';
@Injectable({
  providedIn: 'root'
})
export class BargainsAccountsService {

  constructor(private http: HttpClient) { }

  //Basic CRUD
  get(id: number): Observable<BargainsAccounts> {
    return this.http.get(`${bargainAccountUrl}/${id}`)
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${bargainAccountUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${bargainAccountUrl}/${id}`);
  }

  //Booking queries
  getBookings() {
    return this.http.get<BargainsAccounts[]>(resUrl);
  }
  getBooking(id: number): Observable<BargainsAccounts> {
    return this.http.get(`${resUrl}/${id}`)
  }

  //Account related
  getBookingsAccount(id: number): Observable<BargainsAccounts[]> {
    return this.http.get<BargainsAccounts[]>(`https://pcn-cheaptrip-api.herokuapp.com/chollos-reservados/${id}`);
  }
  getFavsAccount(id: number): Observable<BargainsAccounts[]> {
    return this.http.get<BargainsAccounts[]>(`https://pcn-cheaptrip-api.herokuapp.com/chollos-favoritos/${id}`);
  }

  //Status change
  updateBookedStatus(id: any): Observable<any> {
    return this.http.put(`https://pcn-cheaptrip-api.herokuapp.com/chollo-reservado/cambiar-estado/${id}`, null);
  }
  updateBookmarkedStatus(id: any, data: any): Observable<any> {
    return this.http.put(`https://pcn-cheaptrip-api.herokuapp.com/chollo-favorito/cambiar-estado/${id}`, data);
  }
}
