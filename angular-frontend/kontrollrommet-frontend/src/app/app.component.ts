// Angular Dependencies
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from './_models/index';
// Services
import { AlertService } from './_services/index';
import { UserService, AuthenticationService } from './authentication/index';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
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
