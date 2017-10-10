import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Services
import { HttpService } from './http.service';
import {  Auth as jwtAuth } from 'ng-jwt';
import { AuthenticationService as jwtAuthService } from 'ng-jwt';
// Models
import { User } from '../_models/index';
import { PersonToEntityRelation } from '../_models/index';
import { MeetingParticipant } from '../_models/index';

// Data Service processes data received from component collective services,
// Passes data to/from http and auth services,
// Passes update commands with data to Store
@Injectable()
export class DataService {

    constructor(
        private httpService: HttpService,
        private jwtauth: jwtAuth,
        private jwtauthservice: jwtAuthService,
    ) {}

    createMeeting(meeting) {
        console.log('passing new meeting data to http for creating meeting.');
        this.httpService.createMeeting(meeting);

    }
    // Universal Get Object from http service, takes:
    // obj_name: general name, obj_url: the url to call, obj_urlparam?: id nr to get specific object
    getObject(obj_name, obj_url, obj_urlparam) {
        console.log('getting ', obj_name, ' from http service...');
        return this.httpService.getObject(obj_name, obj_url, obj_urlparam);
    }

    getPersonToEntityRelationByUser(): Observable<PersonToEntityRelation[]> {
        console.log('getting entitiy relations from http...');
        return this.httpService.getPersonToEntityRelationByUser();
    }

    getMeetingParticipantByUser(): Observable<MeetingParticipant[]> {
        console.log('getting meeting participants from http...');
        return this.httpService.getMeetingParticipantByUser();
    }

    getCurrentUser(): Observable<User> {
        console.log('getting current user from http...');
        return this.httpService.getCurrentUser();
    }

    createUser(user) {
        console.log('passing new user data to http for creating user.');
        return this.httpService.createUser(user);
    }

    loginUser(username: string, password: string): Observable<boolean> {
        console.log('sending login data to jwt auth service... awaiting answer true/false if login was successful');
        return this.jwtauthservice.login(username, password);
    }

    logoutUser() {
        console.log('sending command to jwt auth to log us out');
        this.jwtauthservice.logout();
        return Observable.of(true);
    }

    isloggedIn(): Observable<boolean> {
        console.log('sending check to jwt auth to see if we are logged in... awaiting answer true/false if we are logged in');
        return Observable.of(this.jwtauth.loggedIn());
    }

}

