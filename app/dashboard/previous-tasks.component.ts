import { Component, OnChanges, Input } from '@angular/core'
import { Task, TaskService } from '../shared/index'

@Component({
  selector: 'previous-tasks',
  templateUrl: 'app/dashboard/previous-tasks.component.html',
  providers: [TaskService]
})

export class PreviousTasksComponent implements OnChanges {
  @Input()
  mockUser: any;

  myPreviousTasks: Task[];
  previousParticipatingTasks: Task[];
  error: any;

  constructor(
    private taskService: TaskService
    ){}

  private getSelectedTasks() {
    this.taskService
        .getSelectedTasksPrevious(this.mockUser.myTasks)
        .then(tasks => this.myPreviousTasks = tasks)
        .catch(error => this.error = error);

    this.taskService
        .getSelectedTasksPrevious(this.mockUser.participatingTasks)
        .then(tasks => this.previousParticipatingTasks = tasks)
        .catch(error => this.error = error);
  }

  ngOnChanges() {
    if (this.mockUser)
      this.getSelectedTasks();
  }
}