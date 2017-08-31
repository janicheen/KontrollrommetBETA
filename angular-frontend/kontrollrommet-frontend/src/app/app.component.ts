import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { User } from './_models/index';
// Services
import { UserService } from './_services/index';

import { AuthenticationService, AlertService } from './_services/index';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Velkommen til Kontrollrommet, {{currentuser?.person.first_name}}! </h1>  
  </div>

  <div>
    <nav>
      <a class="btn btn-default" role="button" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a class="btn btn-default" role="button" routerLink="/login" routerLinkActive="active" *ngIf="!authService.loggedIn()">Login</a>    
      <a class="btn btn-default" role="button" (click)="logout()" *ngIf="authService.loggedIn()">Logout</a>      
    </nav>
  <router-outlet></router-outlet>
  </div>
  <br>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  currentuser: User
  loggedin: Boolean

  constructor(
    private authService: AuthenticationService,
    private alertService: AlertService,
    private router: Router
  ) {
    const user$ = this.authService.getCurrentUser();
    user$.subscribe(
      user => this.currentuser = user,
      error => this.alertService.error(error)
    );
   }

  logout(): void {
    alert("You are logging out")
    this.authService.logout()
    this.router.navigate(['/login']);
  }

}
