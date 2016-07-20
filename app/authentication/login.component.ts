import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: 'app/authentication/login.component.html'
})

export class LoginComponent {
  username: string;
  password: string;

  submitted = false;

  constructor(
    private router: Router
  ){}

  onSubmit() { 
    this.submitted = true; 
    this.router.navigate(['/dashboard']) //TODO: specific user in URL 
  }
}