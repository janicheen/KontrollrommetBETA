// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { User } from '../_models/index';

// External Services
import { AuthService } from '../authentication/auth.service';
// import { AlertService } from '../../main-ui/_services/alert.service';
// import { UserDataService } from '../../initialization/_services/user-data.service'

@Component({
  selector: 'app-navigationframe',
  templateUrl: './navigationframe.component.html',
  styleUrls: [ './navigationframe.component.css' ]
})

export class NavigationFrameComponent implements OnInit {
  currentuser: User;
  loggedin: Boolean;

  ngOnInit(): void {
  }

}
/*   constructor(
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private userDataService: UserDataService
  ) {
    const user$ = this.userDataService.getCurrentUser();
    user$.subscribe(
      user => this.currentuser = user,
      error => this.alertService.error(error)
    );
   }

  logout(): void {
    alert('You are logging out');
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.userDataService.getCurrentUser()
    .subscribe(user => this.currentuser = user);
  }
}
 */
