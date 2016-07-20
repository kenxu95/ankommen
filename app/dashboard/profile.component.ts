import { Component, Input } from '@angular/core'

@Component({
  selector: 'profile',
  templateUrl: "app/dashboard/profile.component.html"
})

export class ProfileComponent {
  @Input()
  mockUser: any;
}