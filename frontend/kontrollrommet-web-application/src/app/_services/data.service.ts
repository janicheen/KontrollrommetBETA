import { Injectable } from '@angular/core';
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

    data = new State;

    constructor(
        private httpService: HttpService,
        private appStore: AppStore
    ) {}

    loadInitialData() {
        this.loadCurrentUser();
        this.loadMeetingParticipantByUser();
    }

    // Request data from HTTP services
    loadCurrentUser() {
        this.httpService.getCurrentUser()
        .subscribe(
        data => {
            console.log('loading current user into appstore...', data);
            const currentState = this.appStore.getState();
            this.appStore.setState(Object.assign({}, currentState, { 'user': data }));
            },
            err => console.log('Error loading current user')
        );
    }

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

