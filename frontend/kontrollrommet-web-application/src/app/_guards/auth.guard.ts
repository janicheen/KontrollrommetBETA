import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  Auth as jwtAuth } from 'ng-jwt';

// Auth Guard is allowed to get it data directly from jwt auth service.
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private jwtauth: jwtAuth,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.jwtauth.loggedIn()) {
            console.log('canActivate says I am logged in');
            return true;
        } else {
            console.log('canActivate says I am NOT logged in');
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
        }
    }
}
