import { Component, Input, OnInit } from '@angular/core';
import { store } from './shared/index';


@Component({
  selector: 'test',
  template: `
            <h1> Testing database </h1>
            <div> Hello, {{myUser.firstname}} </div>
            `
})


export class TestComponent implements OnInit {
  myUser: any

  ngOnInit(){
    store.findAll('user').then((allUsers) => {
      this.myUser = allUsers[0];
      });
  }
}