import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthenticationService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.loggedIn()) {
            // logged in so return true
            console.log("canActivate says I'm logged in")
            return true;
        }
        else {
            console.log("canActivate says I'm NOT logged in")
            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
        }
    }
}