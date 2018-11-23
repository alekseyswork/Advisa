import {ForecastService, IForeCast} from '../../../services/forecast.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-updateforecast',
  templateUrl: './create-updateforecast.component.html',
  styleUrls: ['./create-updateforecast.component.css']
})
export class CreateUpdateforecastComponent implements OnInit {
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
