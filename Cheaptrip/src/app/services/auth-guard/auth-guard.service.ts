import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenStorageService } from "../../services/security/token-storage.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private tokenStorage: TokenStorageService) { }

  canActivate(): boolean {

    if(this.tokenStorage.getToken()){
      return true;
    }else{
      return false;
    }

  }

}
