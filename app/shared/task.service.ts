import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Task } from './index';

@Injectable()
export class TaskService {
  private dashboardUrl = 'app/dashboard'

  constructor(private http: Http){}

  getTasks(): Promise<Task[]>{
    return this.http.get(this.dashboardUrl)
           .toPromise()
           .then(response => response.json().data as Task[])
           .catch(this.handleError);
  }

  private handleError(error: any){
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
