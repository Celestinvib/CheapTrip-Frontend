import { Account } from "../account/account.model";
import { Bargain } from "../bargain/bargain.model";

export class BargainsAccounts {
  id?: any;
  bargain?: Bargain;
  account?: Account;
  booked?: number;
  bookmarked?:number;
}
