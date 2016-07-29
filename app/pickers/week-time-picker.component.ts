import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { WeektimeshowerComponent } from './index';
import { Asset, DateService } from '../shared/index';

@Component ({
  selector: 'week-time-picker',
  templateUrl: 'app/pickers/week-time-picker.component.html',
  styleUrls: ['app/pickers/week-time-picker.css'],
  directives: [TimepickerComponent, forwardRef(() => WeektimeshowerComponent)], // TODO: Circular dependency resolve
  providers: [DateService]
})

export class WeektimepickerComponent implements OnInit {
  @Input()
  asset: Asset;

  private weekdays = ["Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday", "Sunday"];
  selectedWeekdays = Array<boolean>(7); // Whether any day of the week was selected

  /* Time Picker Attributes*/
  hstep: number = 1;
  mstep: number = 15;
  ismeridian: boolean = false;

  /* New Time Range */
  startTime: Date;
  endTime: Date;

  constructor(private dateService: DateService){}

  ngOnInit(){
    this.startTime = new Date();
    this.endTime = new Date();
  }

  onSelect(weekIndex: number){
    this.selectedWeekdays[weekIndex] = !this.selectedWeekdays[weekIndex]
  }

  canApplyTimeRange(){
    return !this.selectedWeekdays.some(_ => _);
  }

  applyTimeRange(){
    for(var n = 0; n < this.selectedWeekdays.length; n++){
      if(this.selectedWeekdays[n]){
        this.asset.availability[n].push({start: this.startTime, end: this.endTime});
      }
    }
  }
}