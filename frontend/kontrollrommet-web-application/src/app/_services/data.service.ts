import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Models
import { User, MeetingParticipant } from '../_models/index';

// Services
import { HttpService } from './http.service';
import {  Auth as jwtAuth } from 'ng-jwt';
import { AuthenticationService as jwtAuthService } from 'ng-jwt';

// Store
import { AppStore } from '../app-store';

@Injectable()
export class DataService {

    constructor(
        private httpService: HttpService,
        private jwtauth: jwtAuth,
        private jwtauthservice: jwtAuthService,
        private appStore: AppStore
    ) {}

    loadInitialData() {
        this.loadCurrentUser();
        this.loadMeetingParticipantByUser();
    }

    // Gets data from http and loads into the Store
    loadCurrentUser() {
        this.httpService.getCurrentUser()
        .subscribe(
        data => {
            console.log('gotten current user from http service...', data);
            this.appStore.updateState('user', data);
            },
            err => console.log('Error loading current user')
        );
    }
    // Gets data from http and loads into the Store
    loadMeetingParticipantByUser() {
        this.httpService.getMeetingParticipantByUser()
        .subscribe(
        data => {
            console.log('gotten meeting participation from http service...', data);
            this.appStore.updateState('meetingparticipations', data);
        },
            err => console.log('Error loading current user')
        );
    }

    // *** Authentication Processing ***

    // Direct Http method
    registerUser(user) {
        console.log('registering user...', user);
        this.httpService.createUser(user);
    }

    loginUser(username: string, password: string): Observable<boolean> {
        console.log('sending login data to jwt auth service');
        return this.jwtauthservice.login(username, password);
    }

    isloggedIn() {
        return this.jwtauth.loggedIn();
    }

    logoutUser() {
        this.jwtauthservice.logout();
    }
}

