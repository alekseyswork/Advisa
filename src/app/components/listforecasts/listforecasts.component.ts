import {Component, OnInit} from '@angular/core';
import {ForecastService, IForeCast} from './services/forecast.service';
import {Router} from '@angular/router';

@Component(
  {
  selector: 'app-listforecasts',
   templateUrl: './listforecasts.component.html', styleUrls: ['./listforecasts.component.css']
  })

export class ListforecastsComponent implements OnInit {
  Forecasts: Array < IForeCast >;
  constructor(private service: ForecastService, private router: Router) {
    this.Forecasts = service.load();
  }

  ngOnInit() {}
  CreateForecast() {
    this.router.navigate(['CreateForecast']);
  }
}
