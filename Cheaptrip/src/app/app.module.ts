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
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { PerfilNavBarComponent } from './perfil-nav-bar/perfil-nav-bar.component';
import { CholloComponent } from './chollo/chollo.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../app/access/login/login.component';
import { SingupComponent } from './access/singup/singup.component';
import { ForgotpasswordComponent } from './access/forgotpassword/forgotpassword.component';
import { InfocholloComponent } from './infochollo/infochollo.component';
import { TerminosyCondicionesComponent } from './terminosy-condiciones/terminosy-condiciones.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ChollosReservadosComponent } from './perfil-nav-bar/paginas/chollos-reservados/chollos-reservados.component';
import { ChollosFavoritosComponent } from './perfil-nav-bar/paginas/chollos-favoritos/chollos-favoritos.component';
import { DatosPersonalesComponent } from './perfil-nav-bar/paginas/datos-personales/datos-personales.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    PerfilNavBarComponent,
    CholloComponent,
    PerfilComponent,
    FiltrosComponent,
    FooterComponent,
    LoginComponent,
    SingupComponent,
    ForgotpasswordComponent,
    InfocholloComponent,
    TerminosyCondicionesComponent,
    CookiesComponent,
    ChollosReservadosComponent,
    ChollosFavoritosComponent,
    DatosPersonalesComponent,
    ContadorComponent
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
