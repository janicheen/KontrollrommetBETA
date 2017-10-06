// Angular Dependencies
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// import { tokenNotExpired } from 'angular2-jwt';
// import { AuthHttp } from 'angular2-jwt';

// Models
import { User } from '../_models/index';
// Services
import { DataService } from './data.service';


@Injectable()
export class AuthService {
    token: string;

    constructor(
        // private router: Router,
        private dataService: DataService,
        private router: Router
    ) { }

    // Recives form data from component, passes it to data service
    registerUser(user: User) {
        this.dataService.registerUser(user);
    }

    // Receives form data from component, passes it on to data service
    loginUser(username: string, password: string, returnUrl: string) {
        return this.dataService.loginUser(username, password)
        .toPromise()
        .then(
            (data) => {
                // If login returns sucessful, this operation is performed
                if (data) {
                    console.log('login sucessful');
                    this.dataService.loadInitialData();
                    this.router.navigate([returnUrl]);
                // It login returns unsuccessful, this operation is performed
                } else {
                    console.log('failure to log in');
                    this.router.navigate([returnUrl]);
                }
            },
            error => console.log(error)
        );
    }

}
