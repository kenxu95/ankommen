import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './authentication/login.component';
import { RegisterComponent } from './authentication/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard', // TODO: Needs a specific user
    component: DashboardComponent 
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
