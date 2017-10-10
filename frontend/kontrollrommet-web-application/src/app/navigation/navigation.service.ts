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


@Injectable()
export class NavigationService {

    constructor(
        private actionService: ActionService,
        private appStore: AppStore,
        private router: Router
    ) { }

    // Processes that take input from components, process them, calls for actions and deals with results

    // Process with no result
    logoutUser(): void {
        console.log('Received signal to log out user from component');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'logout-user';
        this.actionService.doAction(action);
        console.log('Routing to login page');
        this.router.navigate(['/login']);
    }
}
