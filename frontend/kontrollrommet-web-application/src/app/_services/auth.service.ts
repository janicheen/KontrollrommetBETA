// Angular Dependencies
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { tokenNotExpired } from 'angular2-jwt';
// import { AuthHttp } from 'angular2-jwt';

// Models
import { User } from '../_models/index';
// Services
import { AuthenticationService } from 'ng-jwt';
import { DataService } from './data.service';


@Injectable()
export class AuthService {
    token: string;

    constructor(
        // private router: Router,
        private dataService: DataService,
        private jwtauthService: AuthenticationService,
    ) { }

    registerUser(user: User) {
        this.dataService.registerUser(user);
    }

    loginUser(username: string, password: string): Observable<boolean> {
        return this.dataService.loginUser(username, password);
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
