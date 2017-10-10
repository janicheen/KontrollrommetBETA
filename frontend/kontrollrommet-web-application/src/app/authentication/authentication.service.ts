//
// Component Collective Service
//

// Angular Dependencies
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Main Services
import { ActionService } from '../_services/action.service';
import { AppStore } from '../app-store';
// Process Models
import { Action } from '../_process/action';
// Application Models
import { User } from '../_models/index';

@Injectable()
export class AuthService {

    constructor(
        private actionService: ActionService,
        private appStore: AppStore,
        private router: Router
    ) { }

    // Processes that take input from components, process them, calls for actions and deals with results

    // Process with no result
    registerUser(user: User) {
        console.log('Received new user data from component');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'create-user';
        action.payload = user;
        this.actionService.doAction(action);
        console.log('Routing to login page');
        this.router.navigate(['/login']);
    }

    // Process with result
    loginUser(username: string, password: string, returnUrl: string) {
        console.log('Received login data from component');
        console.log('asking action service to login-user');
        let action = new Action;
        action.action = 'login-user';
        action.payload = [username, password];
        this.actionService.doAction(action)
        .toPromise()
        .then(
            (data) => {
                this.appStore.updateState('is_loading', false);
                // If login returns sucessful, this operation is performed
                if (data) {
                    console.log('got answer from data service and login was sucessful! TRUE');
                    console.log('asking action service to load-alldata');
                    let action = new Action;
                    action.action = 'load-alldata';
                    this.actionService.doAction(action);
                    // rerouting user
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
