import { Component, OnInit } from '@angular/core';
import { ActiveTasksComponent,
         PotentialTasksComponent,
         PreviousTasksComponent,
         ProfileComponent} from './index'

import { UserService } from '../shared/index'


@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard/dashboard.component.html',
  directives: [ActiveTasksComponent, PotentialTasksComponent, 
             PreviousTasksComponent, ProfileComponent],
  providers: [UserService]
})

export class DashboardComponent implements OnInit {
  private tabTitles = ["Active Tasks", "Potential Tasks", "Previous Tasks", "Profile"];
  currentTabIndex = 0;

  mockUser: any; // TODO: REMOVE AFTER BACKEND

  constructor(private userService: UserService){}

  getMockUser() {
    this.userService.getMockUser().then(mockUser => this.mockUser = mockUser);
  }

  ngOnInit() {
    this.getMockUser();
  }

  selectTab(tabIndex: number){
    this.currentTabIndex = tabIndex;
  }
}