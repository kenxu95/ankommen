import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { WeektimeshowerComponent } from './index';
import { Asset, DateService } from '../shared/index';

@Component ({
  selector: 'week-time-picker',
  templateUrl: 'app/pickers/weektimepicker.component.html',
  directives: [TimepickerComponent, forwardRef(() => WeektimeshowerComponent)], // TODO: Circular dependency resolve
  providers: [DateService]
})

export class WeektimepickerComponent implements OnInit {
  @Input()
  asset: Asset;

  hstep: number = 1;
  mstep: number = 15;
  ismeridian: boolean = false;

  startTime: Date;
  endTime: Date;

  dateService: any;

  constructor(private dateService: DateService){}

  ngOnInit(){
    this.startTime = new Date();
    this.endTime = new Date();
  }
}