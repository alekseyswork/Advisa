
import { Component, OnInit } from '@angular/core';
import { IForeCast, ForecastService } from '../services/forecast.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TypeService, IType } from 'src/app/services/type.service';
import { ICurrency } from 'src/app/services/currency.service';


@Component({
  selector: 'app-create-updateforecast',
  templateUrl: './create-updateforecast.component.html',
  styleUrls: ['./create-updateforecast.component.css']
})
export class CreateUpdateforecastComponent implements OnInit {
  myForm: FormGroup;
  forecast: IForeCast;
  Forecasts: Array<IForeCast>;
  typesArray: Array<IType>;
  constructor(private service: ForecastService, private type: TypeService) {
    this.Forecasts = service.load();
    this.typesArray = type.load();
  }
  ngOnInit() {
    this.myForm = new FormGroup({
        email: new FormControl(null, [
            Validators.required,
        ])
      ,
      typeSelected: new FormControl(null, Validators.required)
    });
}
onSubmit(){

}
}
