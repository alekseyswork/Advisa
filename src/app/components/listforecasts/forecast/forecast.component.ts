import { Component, OnInit, Input } from '@angular/core';
import { IForeCast } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Input() forecast: IForeCast;
  constructor() { }

  ngOnInit() {
  }

}
