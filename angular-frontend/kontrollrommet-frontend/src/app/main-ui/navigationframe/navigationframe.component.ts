// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgModule }       from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from '../../_models/index';
// External Services
import { UserService,} from '../../authentication/_services/user.service'
import { AuthenticationService,} from '../../authentication/_services/authentication.service'
import { AlertService } from '../../main-ui/_services/alert.service';

@Component({
  selector: 'my-navigationframe',
  templateUrl: './navigationframe.component.html',
  styleUrls: [ './navigationframe.component.css' ]
})

export class NavigationFrameComponent implements OnInit {
  currentuser: User
  loggedin: Boolean
  
  constructor(
    private authService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private userService: UserService
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

  ngOnInit(): void {
    this.userService.getCurrentUser()
      .then(user => this.currentuser = user)
  }
}
