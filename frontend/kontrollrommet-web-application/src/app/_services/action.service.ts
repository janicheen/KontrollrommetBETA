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
        this.updatePersonToEntityRelationByUser();
        this.updateLoggedIn();
        // Categories
        this.updateObject('meeting categories', 'meeting_manager/meetingcategory', undefined, 'meeting_categories');
    }

    subscribeTo(property: string) {
        console.log('subscribing...');
        return this.appStore.changes.pluck(property);
    }

    // Universal Update Object, getting it from http service and placing it in store, takes:
    // obj_name: general name
    // obj_url: the url to call
    // obj_urlparam?: id nr to get specific object
    // obj_stateproperty: property name in State to be updated
    updateObject(obj_name, obj_url, obj_urlparam, obj_stateproperty) {
        this.dataService.getObject(obj_name, obj_url, obj_urlparam)
        .subscribe(
        data => {
            console.log('I got the ', obj_name, ' data from Data Service, so now I am updating it in store.');
            this.appStore.updateState(obj_stateproperty, data);
            },
        err => console.log('Error getting', obj_name, 'data')
        );
    }

    updateCurrentUser() {
        this.dataService.getCurrentUser()
        .subscribe(
        data => {
            console.log('I got the user data, so now I am updating it in store.');
            this.appStore.updateState('currentuser', data);
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

    updatePersonToEntityRelationByUser() {
        this.dataService.getPersonToEntityRelationByUser()
        .subscribe(
        data => {
            console.log('I got the entity relation data, so now I am updating it in store.');
            this.appStore.updateState('entityrelations', data);
            },
        err => console.log('Error getting meeting participation data')
        );
    }

    updateLoggedIn() {
        this.dataService.isloggedIn()
        .subscribe(
        data => {
            console.log('I got the status of logged in, so now im updating it in the store');
            this.appStore.updateState('is_logged_in', data);
            },
        );
    }

    logoutUser() {
        console.log('I got the command to log out, so now im asking data service to to it');
        this.dataService.logoutUser();
        console.log('Changing status in store, for logged out');
        this.appStore.updateState('is_logged_in', false);
    }


}
