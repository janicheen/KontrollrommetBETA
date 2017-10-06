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
    }

    // Gets data from http and loads it into the Store
    updateCurrentUser() {
        this.dataService.getCurrentUser()
        .subscribe(
        data => {
            console.log('updating user in store...', data);
            this.appStore.updateState('user', data);
            },
            err => console.log('Error updating user')
        );
    }

    updateMeetingParticipantByUser() {
        this.dataService.getMeetingParticipantByUser()
        .subscribe(
        data => {
            console.log('gotten meeting participation from http service...', data);
            this.appStore.updateState('meetingparticipations', data);
            },
            err => console.log('Error loading current user')
        );
    }

}
