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
}
