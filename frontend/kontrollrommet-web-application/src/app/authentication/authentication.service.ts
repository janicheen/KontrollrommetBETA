// Angular Dependencies
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Services
import { DataService } from '../_services/data.service';
import { ActionService } from '../_services/action.service';
// Models
import { User } from '../_models/index';

@Injectable()
export class AuthService {

    constructor(
        // private router: Router,
        private dataService: DataService,
        private actionService: ActionService,
        private router: Router
    ) { }

    // , passes it to data service
    // Reroutes to new page
    registerUser(user: User) {
        console.log('Receiving new user data from component, passing it on to data service.');
        this.dataService.registerUser(user);
        console.log('Routing to login page');
        this.router.navigate(['/login']);
    }

    // Receives form data from component, passes it on to data service
    // Reacts on return data
    loginUser(username: string, password: string, returnUrl: string) {
        console.log('Receiving login data from component, passing it on to data service...');
        return this.dataService.loginUser(username, password)
        .toPromise()
        .then(
            (data) => {
                // If login returns sucessful, this operation is performed
                if (data) {
                    console.log('got answer from data service and login was sucessful! TRUE');
                    this.actionService.loadInitialData();
                    // this.dataService.loadInitialData();
                    this.router.navigate([returnUrl]);
                // It login returns unsuccessful, this operation is performed
                } else {
                    console.log('got answer from data servie and login failed. FALSE');
                    this.router.navigate([returnUrl]);
                }
            },
            error => console.log(error)
        );
    }

}
