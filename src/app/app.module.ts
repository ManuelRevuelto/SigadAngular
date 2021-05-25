import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlumnosComponent } from './Alumnos/alumnos.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './profesores/profesores.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosComponent,
    ProfesoresComponent,
    HomeComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
