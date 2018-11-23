import {HttpModule} from '@angular/http';
import {CreateUpdateforecastComponent} from './components/listforecasts/create-updateforecast/create-updateforecast.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastService } from './services/forecast.service';

import { ListforecastsComponent } from './components/listforecasts/listforecasts.component';
import { ForecastComponent } from './components/listforecasts/forecast/forecast.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthenticationComponent } from './components/auth/authentication.component';
import { LogoutComponent } from './components/auth/logout.component';
import { SignupComponent } from './components/auth/signup.component';
import { SigninComponent } from './components/auth/signin.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ListforecastsComponent,
    NavbarComponent,
    CreateUpdateforecastComponent,
    AuthenticationComponent,
    LogoutComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
