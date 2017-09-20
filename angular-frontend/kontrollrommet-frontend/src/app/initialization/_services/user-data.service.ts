// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// rxjs Dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';

// Models
import { User, Entity, Meeting } from '../../_models/index';

@Injectable()
export class UserDataService {
    // Properties
    private currentuserUrl = 'http://127.0.0.1:8000/currentuser/?format=json';  // URL to runserver local web api
    private entitiesbyuserUrl = 'http://127.0.0.1:8000/entitiesbyuser/?format=json';
    private meetingsbyuserUrl = 'http://127.0.0.1:8000/meetingsbyuser/?format=json';
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    private user: User;

    constructor(
        private authHttp: AuthHttp
    ) { }

    // Method for getting data on currently logged in user
    getCurrentUser(): Observable<User> {
        console.log('getting current user...');
        return this.authHttp.get(this.currentuserUrl)
        .map(res => res.json());
    }

    getEntitiesByUser(): Observable<Entity[]> {
        console.log('getting user entities from API...');
        return this.authHttp.get(this.entitiesbyuserUrl)
        .map(response => response.json() as Entity[])
        .catch(this.handleError);
    }

    // Get list of meetings from API
    getMeetingsByUser(): Promise<Meeting[]> {
        console.log('getting meetings from API...');
        return this.authHttp.get(this.meetingsbyuserUrl)
        .toPromise()
        .then(response => response.json() as Meeting[])
        .catch(this.handleError);
    }

    createCase(send_model): Promise<Case> {
    }

    createSubject(send_subject): Promise<Subject> {
    }

    createSubjectToEntityRelation(send_subjecttoentityrelation): Promise<SubjectToEntityRelation> {
    }


    // private helper methods
    private handleError(error: any): Promise<any> {
        console.error('This is the error handler speaking:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
