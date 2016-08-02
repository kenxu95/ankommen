import { Component, forwardRef, OnInit, Output, EventEmitter } from '@angular/core';
import { TimepickerComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { WeekTimeShowerComponent } from './index';
import { Asset, DateService } from '../shared/index';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';

@Component ({
  selector: 'week-time-picker',
  templateUrl: 'app/pickers/week-time-picker.component.html',
  styleUrls: ['app/pickers/week-time-picker.css'],
  directives: [TimepickerComponent, 
              DROPDOWN_DIRECTIVES,
              forwardRef(() => WeekTimeShowerComponent)], // TODO: Circular dependency resolve
  providers: [DateService]
})

export class WeekTimePickerComponent implements OnInit {
  @Output()
  submit = new EventEmitter();

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

  // TODO: Backend also
  usedTimeRanges: any[][] = [
  [],
  [{start: new Date(), end: new Date()}, {start: new Date(), end: new Date()}, {start: new Date(), end: new Date()}],
  [],
  [{start: new Date(), end: new Date()}],
  [],
  [],
  []];
  selectedUsedWeekdays = Array<boolean>(7); 

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
    this.submit.emit([this.selectedWeekdays, 
                     {start: this.startTime, end: this.endTime}]);
  }

  applyUsedTimeRange(weekIndex: number, usedTimeRange: any) {
    this.selectedUsedWeekdays[weekIndex] = true;
    this.submit.emit([this.selectedUsedWeekdays,
                      usedTimeRange]);
    this.selectedUsedWeekdays[weekIndex] = false;
  }
}











