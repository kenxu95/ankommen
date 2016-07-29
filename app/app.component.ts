import { Component, ViewContainerRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  directives: [ROUTER_DIRECTIVES]
})

// TODO: Add an authentication flag to update the top menu
export class AppComponent { 
  viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef: ViewContainerRef){
    this.viewContainerRef = viewContainerRef;
  }
}