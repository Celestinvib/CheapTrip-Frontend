import { City } from "../city/city.model";

export class Accommodation {
    id?: any;
    name?: string;
    address?: string;
    category?: string;
    latitude?: number;
	  longitude?: number;
    rating?: number;
    city?: City;
    status?: number;
}
