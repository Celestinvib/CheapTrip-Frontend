import { City } from '../city/city.model';
export class Flight {
  id?:any;
  origin?:City;
  destination?:City;
  departure_date?:Date;
  arrival_date?:Date;
  status?:number;
}
