import { Component, Input } from '@angular/core';

import { Asset, DateService } from '../shared/index';
import { Dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component ({
  selector: 'week-time-shower',
  templateUrl: 'app/pickers/week-time-shower.component.html',
  styleUrls: ['app/pickers/week-time-shower.css'],
  directives: [Dragula],
  viewProviders: [DragulaService],
  providers: [DateService]
})

export class WeekTimeShowerComponent {
  private weekdays = ["Monday", "Tuesday", "Wednesday", 
            "Thursday", "Friday", "Saturday", "Sunday"];

  @Input()
  asset: Asset;

  constructor(
    private dateService: DateService,
    private dragulaService: DragulaService
  ){
    dragulaService.setOptions('timerange-bag', {removeOnSpill: true})
  }
}