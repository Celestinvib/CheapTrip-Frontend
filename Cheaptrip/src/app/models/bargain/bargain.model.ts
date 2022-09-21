import { Accommodation } from '../accommodation/accommodation.model';
import { Flight } from '../flight/flight.model';
export class Bargain {
  id?:any;
  title?:string;
  image?:string;
  price?:number;
  description?:string;
  expiration_date?:Date;
  outbound_flight?:Flight;
  return_flight?:Flight;
  accommodation?:Accommodation;
  status?:number;
}
