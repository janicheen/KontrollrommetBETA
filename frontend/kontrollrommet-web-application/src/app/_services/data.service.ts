import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/Rx';
// Models
import { User, MeetingParticipant } from '../_models/index';
import { State } from '../state';

// Services
import { HttpService } from './http.service';
// Store
import { AppStore } from '../app-store';

@Injectable()
export class DataService {

    datastore = new State;
/*     state = new State();
    datastore = new BehaviorSubject<State>(this.state)
    .asObservable()
    .distinctUntilChanged();
 */
    constructor(
        private httpService: HttpService,
        private appStore: AppStore
    ) {}

    loadInitialData() {
        this.loadCurrentUser();
        this.loadMeetingParticipantByUser();
    }

    loadCurrentUser() {
        console.log('running loadcurrentuser');
        this.getCurrentUser()
        .then(() => {
            this.appStore.updateState('user', this.datastore.user);
        });
    }

    // Request data from HTTP services
    getCurrentUser() {
        return new Promise(() => {
            this.httpService.getCurrentUser()
            .subscribe(
            data => {
                console.log('getting current user from http service...', data);
                this.datastore.user = data;
                },
                err => console.log('Error loading current user')
            );
        });
    }

    // Update Store
    updateCurrentUser() {
        console.log('running update currentuser');
        this.appStore.updateState('user', this.datastore.user);
    }


    /* // Update Store
    loadCurrentUser() {
        console.log('running loadcurrentuser');
        this.getCurrentUser();
        data = this.datastore.asObservable()
        .distinctUntilChanged()
        // log new state
        .do(data => this.appStore.updateState('user', data.user));
    }
 */
    loadMeetingParticipantByUser() {
        this.httpService.getMeetingParticipantByUser()
        .subscribe(
        data => {
            console.log('loading meeting participant by user into appstore...', data);
            const currentState = this.appStore.getState();
            this.appStore.setState(Object.assign({}, currentState, { 'meetingparticipations': data }));
            },
            err => console.log('Error loading current user')
        );
    }

}

