import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { User } from '../shared/user';
import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: 'app/authentication/register.component.html'
})

export class RegisterComponent {
  private notificationFrequencies = ['Per notification',
                             'Per day',
                             'Per week'];
  newUser = new User();

  submitted = false;

  onSubmit() { 
    this.submitted = true;
  }
}