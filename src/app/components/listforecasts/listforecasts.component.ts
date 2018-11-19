import { Component, OnInit } from '@angular/core';
import { ForecastService, IForeCast } from 'src/app/services/forecast.service';


@Component({
  selector: 'app-listforecasts',
  templateUrl: './listforecasts.component.html',
  styleUrls: ['./listforecasts.component.css']
})
export class ListforecastsComponent implements OnInit {

  Forecasts: Array<IForeCast>;
  constructor(private service: ForecastService) {
    this.Forecasts = service.load();
  }

  ngOnInit() {
  }

}
