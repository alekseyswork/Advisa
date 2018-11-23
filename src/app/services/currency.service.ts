import { Injectable } from '@angular/core';

const Currency: Array<ICurrency> = [
  { id: 1, name: 'Rub', description: 'some' },
  { id: 2, name: 'Usd', description: 'some2' }
];
export interface ICurrency {
  id: number;
  name: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }
  get(): Array<ICurrency> {
    return Currency;
  }
}
