import { Component, OnInit } from '@angular/core'
import { Task, TaskService } from '../shared/index'

@Component({
  selector: 'active-tasks',
  template: "<h1>ACTIVE TASKS </h1>"
})

export class ActiveTasksComponent implements OnInit {
  tasks: Task[];
  error: any;

  constructor(
    private taskService: TaskService
    ){}

  getTasks() {
    this.taskService
        .getTasks()
        .then(tasks => this.tasks = tasks)
        .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getTasks();
  }

}