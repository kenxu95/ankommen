import { Component, OnInit } from '@angular/core';
import { ActiveTasksComponent,
         PotentialTasksComponent,
         PreviousTasksComponent,
         ProfileComponent} from './index';

import { UserService } from '../shared/index';

  // TODO: Do not want all tabs loading at the same time, right?
import { TAB_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  directives: [ActiveTasksComponent, PotentialTasksComponent, 
             PreviousTasksComponent, ProfileComponent, TAB_DIRECTIVES],
  providers: [UserService]
})


export class DashboardComponent implements OnInit {

  mockUser: any; // TODO: REMOVE AFTER BACKEND

  constructor(private userService: UserService){}

  getMockUser() {
    this.userService.getMockUser().then(mockUser => this.mockUser = mockUser);
  }

  ngOnInit() {
    this.getMockUser();
  }

}