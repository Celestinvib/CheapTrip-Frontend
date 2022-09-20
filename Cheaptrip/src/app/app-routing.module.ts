import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/admin/home/home.component';
import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CityUpdateComponent } from './components/admin/city/city-update/city-update.component';
import { CookiesComponent } from './components/politycs/cookies/cookies.component';
import { TermsAndConditionsComponent } from './components/politycs/terms-and-conditions/terms-and-conditions.component';
import { LoginComponent } from './components/access/login/login.component';
import { BasicLoginComponent } from './components/access/basic-login/basic-login.component';
import { SingupComponent } from './components/access/singup/singup.component';
import { ForgotpasswordComponent } from './components/access/forgotpassword/forgotpassword.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MainComponent } from './components/main/main.component';
import { BargainInformationComponent } from './components/bargains/bargain-information/bargain-information.component';
import { BargainsBookmarkedComponent } from './components/profile/pages/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './components/profile/pages/personal-data/personal-data.component';
import { BargainsBookedComponent } from './components/profile/pages/bargains-booked/bargains-booked.component';


const routes: Routes = [
  {
    path:'site-admin/cities',
    component: CitiesListComponent
  },
  {
    path:'site-admin/cities/add',
    component: CityAddComponent
  },
  {
    path:'site-admin/cities/update/:id',
    component: CityUpdateComponent
  },
  {
    path:'site-admin/home',
    component: HomeComponent
  },
  {
    path:'cookies',
    component: CookiesComponent
  },
  {
    path:'terms-of-use',
    component: TermsAndConditionsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'basic-login',
    component: BasicLoginComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },
  {
    path: 'password_reset',
    component: ForgotpasswordComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'bargain-info',
    component: BargainInformationComponent
  },
  {
    path:'profile/mydata',
    component: PersonalDataComponent
  },
  {
    path:'profile/bookmarked',
    component: BargainsBookmarkedComponent
  },
  {
    path:'profile/booked',
    component: BargainsBookedComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
