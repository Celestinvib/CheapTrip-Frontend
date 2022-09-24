import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from "../../../services/security/token-storage.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }


  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      this.isAdmin = this.checkIfAdmin();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/bargains']);
  }

  checkIfAdmin(): boolean {

    if(this.tokenStorageService.getRole() == 'ROLE_ADMIN'){
      return true;
    }else{
      return false;
    }

  }
}
