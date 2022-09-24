import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenStorageService } from "../../services/security/token-storage.service"

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private tokenStorage: TokenStorageService) { }

  canActivate(): boolean {

    if(this.tokenStorage.getRole() == 'ROLE_ADMIN'){
      return true;
    }else{
      return false;
    }

  }

}
