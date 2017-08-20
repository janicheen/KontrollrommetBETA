import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
// Models
import { User } from './_models/index';
// Services
import { UserService } from './_services/index';

import { AuthenticationService } from './_services/index';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Velkommen til Kontrollrommet, {{currentuser.person.first_name}}! </h1>  
  </div>

  <div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/login" routerLinkActive="active" *ngIf="!auth.loggedIn()">Login</a>    
      <a (click)="logout()" *ngIf="auth.loggedIn()">Logout</a>      
    </nav>
  <router-outlet></router-outlet>
  </div>
  <br>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterContentInit {
  currentuser: User
  constructor(
    private userService: UserService,
    private auth: AuthenticationService,
    private router: Router
  ) { }

  logout(): void {
    alert("Out are logging out")
    this.auth.logout()
    this.router.navigate(['/login']);
  }

  ngAfterContentInit(): void {
    this.userService.getCurrentUser()
      .then(user => this.currentuser = user)
  }
}
