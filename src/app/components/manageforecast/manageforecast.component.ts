import { Component, OnInit } from '@angular/core';
import { IForeCast, ForecastService } from 'src/app/services/forecast.service';

@Component({
  selector: 'app-manageforecast',
  templateUrl: './manageforecast.component.html',
  styleUrls: ['./manageforecast.component.css']
})
export class ManageforecastComponent implements OnInit {
  forecast: IForeCast;
  Forecasts: Array<IForeCast>;
  constructor(private service: ForecastService) {
    this.Forecasts = service.load();
  }

  add() {
    this.service.add(this.forecast);
  }

  remove(symbol) {
    this.Forecasts = this.service.remove(this.forecast);
  }

  ngOnInit() {
  }

}
