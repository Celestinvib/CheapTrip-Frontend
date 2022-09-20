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
import { ProfileModule } from './components/profile/profile.module';
import { FeaturesListComponent } from './components/admin/feature/features-list/features-list.component';
import { FeatureAddComponent } from './components/admin/feature/feature-add/feature-add.component';
import { FeatureUpdateComponent } from './components/admin/feature/feature-update/feature-update.component';


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
    path:'site-admin/features',
    component: FeaturesListComponent
  },
  {
    path:'site-admin/features/add',
    component: FeatureAddComponent
  },
  {
    path:'site-admin/features/update/:id',
    component: FeatureUpdateComponent
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
    path: 'main',
    component: MainComponent
  },
  {
    path: 'bargain-info',
    component: BargainInformationComponent
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile-routing.module').then( m => ProfileModule )
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
