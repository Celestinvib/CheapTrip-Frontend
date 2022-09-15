import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page-bars/navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './page-bars/footer/footer.component';
import { LoginComponent } from '../app/access/login/login.component';
import { SingupComponent } from './access/singup/singup.component';
import { ForgotpasswordComponent } from './access/forgotpassword/forgotpassword.component';
import { CookiesComponent } from './politycs/cookies/cookies.component';
import { TermsAndConditionsComponent } from './politycs/terms-and-conditions/terms-and-conditions.component';
import { BargainComponent } from './bargains/bargain/bargain.component';
import { BargainInformationComponent } from './bargains/bargain-information/bargain-information.component';
import { BargainAccordionComponent } from './bargains/bargain-accordion/bargain-accordion.component';
import { BargainCountdownComponent } from './bargains/bargain-countdown/bargain-countdown.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileNavBarComponent } from './page-bars/profile-nav-bar/profile-nav-bar.component';
import { BargainsBookedComponent } from './profile/paginas/bargains-booked/bargains-booked.component';
import { BargainsBookmarkedComponent } from './profile/paginas/bargains-bookmarked/bargains-bookmarked.component';
import { PersonalDataComponent } from './profile/paginas/personal-data/personal-data.component';
import { FiltersComponent } from './main/filters/filters.component';

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
    FiltersComponent
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
