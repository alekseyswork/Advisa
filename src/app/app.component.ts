import { Component } from '@angular/core';
import { ForecastService, IForeCast } from './services/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Advisa';
}
