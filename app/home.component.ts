import { Component } from '@angular/core';

import { DATEPICKER_DIRECTIVES, TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';

@Component ({
  selector: 'home-page',
  templateUrl: 'app/home.component.html',
  directives: [DATEPICKER_DIRECTIVES, TimepickerComponent]
})

export class HomeComponent {

  // DATE PICKER 
  dt: Date = new Date();
  minDate: Date = new Date();

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  // TIME PICKER 
  hstep: number = 1;
  mstep: number = 15;
  ismeridian: boolean = false;
  selectedTime: Date: new Date(); 
}