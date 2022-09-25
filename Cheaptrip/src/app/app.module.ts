import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './helpers/auth.interceptor';

import { NgxPaginationModule } from 'ngx-pagination';

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
import { BargainsBookedComponent } from './components/profile/pages/bargains-booked/bargains-booked.component';
import { BargainsBookmarkedComponent } from './components/profile/pages/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './components/profile/pages/personal-data/personal-data.component';
import { FiltersComponent } from './components/main/filters/filters.component';
import { CitiesListComponent } from './components/admin/city/cities-list/cities-list.component';
import { CityAddComponent } from './components/admin/city/city-add/city-add.component';
import { CityUpdateComponent } from './components/admin/city/city-update/city-update.component';
import { AdminNavComponent } from './components/admin/admin-nav/admin-nav.component';
import { HomeComponent } from './components/admin/home/home.component';
import { NewpasswordComponent } from './components/access/newpassword/newpassword.component';
import { FeaturesListComponent } from './components/admin/feature/features-list/features-list.component';
import { FeatureAddComponent } from './components/admin/feature/feature-add/feature-add.component';
import { FeatureUpdateComponent } from './components/admin/feature/feature-update/feature-update.component';
import { AccomomodationListComponent } from './components/admin/accommodation/accomomodation-list/accomomodation-list.component';
import { AccomomodationAddComponent } from './components/admin/accommodation/accomomodation-add/accomomodation-add.component';
import { AccomomodationUpdateComponent } from './components/admin/accommodation/accomomodation-update/accomomodation-update.component';
import { FlightListComponent } from './components/admin/flight/flight-list/flight-list.component';
import { FlightAddComponent } from './components/admin/flight/flight-add/flight-add.component';
import { FlightUpdateComponent } from './components/admin/flight/flight-update/flight-update.component';
import { AccountsListComponent } from './components/admin/account/accounts-list/accounts-list.component';
import { AccountAddComponent } from './components/admin/account/account-add/account-add.component';
import { AccountUpdateComponent } from './components/admin/account/account-update/account-update.component';
import { BargainsListComponent } from './components/admin/bargain/bargains-list/bargains-list.component';
import { BargainAddComponent } from './components/admin/bargain/bargain-add/bargain-add.component';
import { BargainsUpdateComponent } from './components/admin/bargain/bargains-update/bargains-update.component';
import { BookingsListComponent } from './components/admin/booking/bookings-list/bookings-list.component';
import { BookingsAddComponent } from './components/admin/booking/bookings-add/bookings-add.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBookedComponent } from './components/dialogs/dialog-booked/dialog-booked.component';
import { DialogBookmarkedComponent } from './components/dialogs/dialog-bookmarked/dialog-bookmarked.component';
import { DialogDeleteProfileComponent } from './components/dialogs/dialog-delete-profile/dialog-delete-profile.component';
import { GoodByeComponent } from './components/access/good-bye/good-bye.component';
import { ExpireSoonComponent } from './components/expire-soon/expire-soon.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

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
    FeaturesListComponent,
    FeatureAddComponent,
    FeatureUpdateComponent,
    AccomomodationListComponent,
    AccomomodationAddComponent,
    AccomomodationUpdateComponent,
    FlightListComponent,
    FlightAddComponent,
    FlightUpdateComponent,
    AccountsListComponent,
    AccountAddComponent,
    AccountUpdateComponent,
    BargainsListComponent,
    BargainAddComponent,
    BargainsUpdateComponent,
    BookingsListComponent,
    BookingsAddComponent,
    DialogBookedComponent,
    DialogBookmarkedComponent,
    DialogDeleteProfileComponent,
    GoodByeComponent,
    ExpireSoonComponent,
    FavoritesComponent


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
    HttpClientModule,
    MatExpansionModule,
    NgxPaginationModule,
    MatDialogModule

  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],


})
export class AppModule { }
