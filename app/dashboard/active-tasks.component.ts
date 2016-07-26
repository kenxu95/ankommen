import { Component, OnChanges, Input } from '@angular/core';
import { Task, TaskService } from '../shared/index';
import { Dragula, DragulaService} from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'active-tasks',
  templateUrl: "app/dashboard/active-tasks.component.html",
  styleUrls: ["app/shared/styles/dragAssets.css"],
  directives: [Dragula],
  viewProviders: [DragulaService],
  providers: [TaskService]
})

export class ActiveTasksComponent implements OnChanges {
  @Input()
  mockUser: any;

  myTasks: Task[];
  participatingTasks: Task[];
  error: any;

  // TODO: Replace this with real assets code when we can fetch asset images
  myAssets: number[] = [1, 2, 3, 4];
  otherAssets: number[] = [5, 6, 7];

  constructor(
    private taskService: TaskService,
    private dragulaService: DragulaService
    ){
    dragulaService.setOptions('assets-bag', {
      revertOnSpill: true
    });
  }

  // FILTER BY ACTIVE TASKS TODO: ADD MY TASKS TOO
  private getSelectedTasks() {
    this.taskService
        .getSelectedTasksFuture(this.mockUser.myTasks)
        .then(tasks => this.myTasks = tasks)
        .catch(error => this.error = error);

    this.taskService
        .getSelectedTasksFuture(this.mockUser.participatingTasks)
        .then(tasks => this.participatingTasks = tasks)
        .catch(error => this.error = error);
  }

  ngOnChanges() {
    if (this.mockUser)
      this.getSelectedTasks();

    if (typeof jQuery != 'undefined') {
      alert(jQuery.fn.jquery);
    }
  }

  imageClick(){
    console.log("Image clicked");
    console.log(this.myAssets);
  }
}












