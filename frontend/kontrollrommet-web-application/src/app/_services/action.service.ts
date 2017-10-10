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
            // Actions without results
            case 'create-meeting': {
                this.createMeeting(action.payload);
                break;
            }
            // Actions without results
            case 'create-plan': {
                this.createPlan(action.payload);
                break;
            }
            // Actions with results
            case 'login-user': {
                return this.loginUser(action.payload);
            }
            case 'get-objects': {
                return this.getObjects(action.payload);
            }
            case 'pts-us': {
                // some action
                break;
            }

        }
    }

    // Collected Action
    loadAlldata() {
        console.log('Doing loadAlldata...');
        this.checkCurrentUser();
        this.checkMeetingParticipantByUser();
        this.checkPersonToEntityRelationByUser();
        this.checkLoggedIn();
        // Categories
        this.checkObject('meeting categories', 'meeting_manager/meetingcategory', undefined, 'meeting_categories');
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

    createMeeting(payload) {
        console.log('Doing createMeeting...');
        this.appStore.updateState('is_loading', true);
        this.dataService.createMeeting(payload)
        .subscribe(
            data => {
                this.checkMeetingParticipantByUser();
                this.appStore.updateState('is_loading', false);
            }
        );
    }

    createPlan(payload) {
        console.log('Doing createPlan...', payload);
        this.appStore.updateState('is_loading', true);
        this.dataService.createPlan(payload)
        .subscribe(
            data => {
                this.checkPersonToEntityRelationByUser();
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

    // Resultive Actions with payload
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
    checkObject(obj_name, obj_url, obj_urlparam, obj_stateproperty) {
        this.dataService.getObject(obj_name, obj_url, obj_urlparam)
        .subscribe(
            data => {
                console.log('I got the ', obj_name, ' data from Data Service, so now I am updating it in store.');
                this.appStore.updateState(obj_stateproperty, data);
                },
            err => console.log('Error getting', obj_name, 'data')
        );
    }

    // Resultive acion with no layload
    checkCurrentUser() {
        console.log('Doing checkCurrentUser...');
        this.appStore.updateState('is_loading', true);
        this.dataService.getCurrentUser()
        .subscribe(
            data => {
                this.appStore.updateState('currentuser', data);
                this.appStore.updateState('is_loading', false);
                },
            err => console.log('Error getting user data')
        );
    }

    checkMeetingParticipantByUser() {
        console.log('Doing checkMeetingParticipantByUser...');
        this.appStore.updateState('is_loading', true);
        this.dataService.getMeetingParticipantByUser()
        .subscribe(
            data => {
                this.appStore.updateState('meetingparticipations', data);
                this.appStore.updateState('is_loading', false);
            },
            err => console.log('Error getting meeting participation data')
        );
    }

    checkPersonToEntityRelationByUser() {
        console.log('Doing PersonToEntityRelationByUser...');
        this.dataService.getPersonToEntityRelationByUser()
        .subscribe(
            data => {
                this.appStore.updateState('entityrelations', data);
                this.appStore.updateState('is_loading', false);
            },
            err => console.log('Error getting meeting participation data')
        );
    }

    checkLoggedIn() {
        console.log('Doing checkLoggedIn...');
        this.dataService.isloggedIn()
        .subscribe(
            data => {
                this.appStore.updateState('is_logged_in', data);
                this.appStore.updateState('is_loading', false);
            },
            err => console.log('Error getting meeting participation data')
        );
    }



}
