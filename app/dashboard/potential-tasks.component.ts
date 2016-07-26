import { Component, OnChanges, Input } from '@angular/core'
import { Task, TaskService } from '../shared/index'

@Component({
  selector: 'potential-tasks',
  templateUrl: 'app/dashboard/potential-tasks.component.html',
  providers: [TaskService]
})

export class PotentialTasksComponent implements OnChanges {
  @Input()
  mockUser: any;

  assetsSearch: string[];

  specificallyRequestedTasks: Task[];
  potentialTasks: Task[];
  error: any;


  constructor(
    private taskService: TaskService
    ){}

  private getSelectedTasks() {
    this.taskService
        .getSelectedTasks(this.mockUser.specificallyRequest)
        .then(tasks => this.specificallyRequestedTasks = tasks)
        .catch(error => this.error = error);

    this.searchForTasks()                    
  }

  searchForTasks(assets: string[] = this.mockUser.assets) {
    console.log(assets);

    var accountedTasks = this.mockUser.myTasks
                    .concat(this.mockUser.participatingTasks
                    .concat(this.mockUser.specificallyRequest)); 

    this.taskService
        .getPotentialTasks(assets, accountedTasks)
        .then(tasks => this.potentialTasks = tasks)
        .catch(error => this.error = error); 
  }

  ngOnChanges() {
    if (this.mockUser){
      this.getSelectedTasks();
      this.assetsSearch = this.mockUser.assets;
    }
  }
}

