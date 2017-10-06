import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { AppStore } from '../app-store';
import { DataService } from '../_services/data.service';

@Injectable()
export class ActionService {

constructor(
    private appStore: AppStore,
    private dataService: DataService
) { }

    loadInitialData() {
        this.updateCurrentUser();
        this.updateMeetingParticipantByUser();
        this.updateLoggedIn();
    }

    // Gets data from http and loads it into the Store
    updateCurrentUser() {
        this.dataService.getCurrentUser()
        .subscribe(
        data => {
            console.log('I got the user data, so now I am updating it in store.');
            this.appStore.updateState('user', data);
            },
        err => console.log('Error getting user data')
        );
    }

    updateMeetingParticipantByUser() {
        this.dataService.getMeetingParticipantByUser()
        .subscribe(
        data => {
            console.log('I got the meeting participation data, so now I am updating it in store.');
            this.appStore.updateState('meetingparticipations', data);
            },
        err => console.log('Error getting meeting participation data')
        );
    }

    updateLoggedIn() {
        this.dataService.isloggedIn()
        .subscribe(
        data => {
            console.log('I got the status of logged in, so now im updating it in the store');
            this.appStore.updateState('isLoggedin', data);
            },
        );
    }

    logoutUser() {
        console.log('I got the command to log out, so now im asking data service to to it');
        this.dataService.logoutUser();
        console.log('Changing status in store, for logged out');
        this.appStore.updateState('isLoggedin', false);
    }


}
