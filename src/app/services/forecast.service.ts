import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';

const URL = 'sfs';

const Forecasts: Array<IForeCast> = [
  { id: 1, name: 'first', description: 'some' },
  { id: 2, name: 'second', description: 'some2' }
];

export interface IForeCast {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  // private http: HttpClient
  constructor() { }

  get(): Array<IForeCast> {
    return Forecasts;
  }
  add(forecast: IForeCast): Array<IForeCast> {
    Forecasts.push(forecast);
    return this.get();
  }

  remove(forecast: IForeCast): Array<IForeCast> {
    Forecasts.splice(Forecasts.indexOf(forecast), 1);
    return this.get();
  }
  load() {
    return this.get();
  }
}
