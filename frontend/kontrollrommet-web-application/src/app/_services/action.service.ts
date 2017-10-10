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

    doAction(action) {
        switch (action.action) {
            // Collected Actions
            case 'load-alldata': {
                this.loadAlldata();
                break;
            }
            // Direct Actions, no result
            case 'logout-user': {
                this.logoutUser();
                break;
            }
            // Actions without results
            case 'create-user': {
                this.createUser(action.payload);
                break;
            }
            // Actions with results
            case 'login-user': {
                return this.loginUser(action.payload);
            }
            case 'get-objects': {
                return this.getObjects(action.payload);
            }case 'pts-us': {
                // some action
                break;
            }

        }
    }

    // Collected Action
    loadAlldata() {
        console.log('Doing loadAlldata...');
        this.appStore.updateState('is_loading', true);
        this.updateCurrentUser();
        this.updateMeetingParticipantByUser();
        this.updatePersonToEntityRelationByUser();
        this.updateLoggedIn();
        // Categories
        this.updateObject('meeting categories', 'meeting_manager/meetingcategory', undefined, 'meeting_categories');
    }

    // No result Action
    createUser(payload) {
        console.log('Doing createUser...');
        this.appStore.updateState('is_loading', true);
        let user = payload;
        this.dataService.createUser(user)
        .subscribe(
            data => {
                this.appStore.updateState('is_loading', false);
            }
        );
    }

    // No result No payload Action
    logoutUser() {
        console.log('Doing logoutUser...');
        this.appStore.updateState('is_loading', true);
        this.dataService.logoutUser()
        .subscribe(
            data => {
                this.appStore.updateState('is_logged_in', false);
                this.appStore.updateState('is_loading', false);
            }
        );
    }

    // Resultive Actions
    loginUser(payload) {
        console.log('Doing loginUser...');
        this.appStore.updateState('is_loading', true);
        const username = payload[0];
        const password = payload[1];
        return this.dataService.loginUser(username, password);
    }

    getObjects(payload) {
        console.log('Doing getObjects...');
        this.appStore.updateState('is_loading', true);
        return this.dataService.getObject(payload[0], payload[1], payload[2]);
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



}
