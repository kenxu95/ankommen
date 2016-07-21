import { Component, OnChanges, Input } from '@angular/core'
import { Task, TaskService } from '../shared/index'

@Component({
  selector: 'active-tasks',
  templateUrl: "app/dashboard/active-tasks.component.html",
  providers: [TaskService]
})

export class ActiveTasksComponent implements OnChanges {
  @Input()
  mockUser: any;

  myTasks: Task[];
  participatingTasks: Task[];
  error: any;

  constructor(
    private taskService: TaskService
    ){}

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
  }
}