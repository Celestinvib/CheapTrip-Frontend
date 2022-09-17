import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/page-bars/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/page-bars/footer/footer.component';
import { LoginComponent } from '../app/components/access/login/login.component';
import { SingupComponent } from './components/access/singup/singup.component';
import { ForgotpasswordComponent } from './components/access/forgotpassword/forgotpassword.component';
import { CookiesComponent } from './components/politycs/cookies/cookies.component';
import { TermsAndConditionsComponent } from './components/politycs/terms-and-conditions/terms-and-conditions.component';
import { BargainComponent } from './components/bargains/bargain/bargain.component';
import { BargainInformationComponent } from './components/bargains/bargain-information/bargain-information.component';
import { BargainAccordionComponent } from './components/bargains/bargain-accordion/bargain-accordion.component';
import { BargainCountdownComponent } from './components/bargains/bargain-countdown/bargain-countdown.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileNavBarComponent } from './components/page-bars/profile-nav-bar/profile-nav-bar.component';
import { BargainsBookedComponent } from './components/profile/paginas/bargains-booked/bargains-booked.component';
import { BargainsBookmarkedComponent } from './components/profile/paginas/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './components/profile/paginas/personal-data/personal-data.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CityUpdateComponent } from './components/admin/city/city-update/city-update.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { HomeComponent } from './components/admin/home/home.component';
import { NewpasswordComponent } from './components/access/newpassword/newpassword.component';
import { BasicLoginComponent } from './components/access/basic-login/basic-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    ForgotpasswordComponent,
    CookiesComponent,
    TermsAndConditionsComponent,
    BargainComponent,
    BargainInformationComponent,
    BargainAccordionComponent,
    BargainCountdownComponent,
    ProfileComponent,
    ProfileNavBarComponent,
    BargainsBookedComponent,
    BargainsBookmarkedComponent,
    PersonalDataComponent,
    FiltersComponent,
    CitiesListComponent,
    CityAddComponent,
    CityUpdateComponent,
    AdminNavComponent,
    HomeComponent,
    NewpasswordComponent,
    BasicLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
