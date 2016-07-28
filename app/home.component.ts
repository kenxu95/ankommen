import { Component } from '@angular/core';
import { DATEPICKER_DIRECTIVES, TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';

@Component ({
  selector: 'home-page',
  templateUrl: 'app/home.component.html',
  styles: [`
          .sebm-google-map-container {
            height: 300px;
          }
          `],
  directives: [DATEPICKER_DIRECTIVES, TimepickerComponent, GOOGLE_MAPS_DIRECTIVES]
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
  selectedTime: Date = new Date(); 

  //GOOGLE MAPS
  lat: number = 51.678418;
  lng: number = 7.809007
}