// Angular Dependencies
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
// Angular JWT
import { tokenNotExpired } from 'angular2-jwt';
import { AuthHttp } from 'angular2-jwt';

// Models
import { User } from '../_models/index';
// Services
import { CurrentUserService } from '../_services/current_user.service';

@Injectable()
export class AuthService {
  // user = new User;
  token: string;

  constructor(
    private router: Router,
    private currentuserService: CurrentUserService
  ) { }

  registerUser(user: User) {
    this.currentuserService.createUser(user);
  }

  loginUser(username: string, password: string) {
    this.currentuserService.loginUserandgetToken(username, password);
/*       .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => this.token = token
            );
        }
      )
      .catch(
        error => console.log(error)
      );
 */  }

  logout() {
    // firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
/*     firebase.auth().currentUser.getToken()
      .then(
        (token: string) => this.token = token
      );
 */    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  // Check if someone is logged in
  loggedIn() {
    return tokenNotExpired('UserToken');
  }

}
