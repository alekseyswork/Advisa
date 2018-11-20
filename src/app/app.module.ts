import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForecastService } from './services/forecast.service';

import { ListforecastsComponent } from './components/listforecasts/listforecasts.component';
import { ManageforecastComponent } from './components/manageforecast/manageforecast.component';
import { ForecastComponent } from './components/listforecasts/forecast/forecast.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ListforecastsComponent,
    ManageforecastComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
