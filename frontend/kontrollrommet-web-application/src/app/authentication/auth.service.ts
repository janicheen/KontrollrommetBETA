// Angular Dependencies
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { tokenNotExpired } from 'angular2-jwt';
// import { AuthHttp } from 'angular2-jwt';

// Models
import { User } from '../_models/index';
// Services
import { CurrentUserService } from '../_services/current_user.service';
import { AuthenticationService, Auth } from 'ng-jwt';


@Injectable()
export class AuthService {
    token: string;

    constructor(
        // private router: Router,
        private currentuserService: CurrentUserService,
        private jwtauthService: AuthenticationService,
        private jwtAuth: Auth
    ) { }

    registerUser(user: User) {
        console.log('registering...', user);
        this.currentuserService.createUser(user);
    }

    loginUser(username: string, password: string): Observable<boolean> {
        console.log('running loginUser');
        return this.jwtauthService.login(username, password);
    }

    logoutUser() {
        this.jwtauthService.logout();
    }

    loggedIn() {
        return this.jwtAuth.loggedIn();
    }

 /*  getToken() { */
/*     firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
 */   /*  return this.token;
  } */

  /* isAuthenticated() {
    return this.token != null;
  } */

 /*  // Check if someone is logged in
  loggedIn() {
    return tokenNotExpired('UserToken');
  }
 */
}
