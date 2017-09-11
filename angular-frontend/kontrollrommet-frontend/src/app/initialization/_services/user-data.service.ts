// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
// rxjs Dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';

// Models
import { User, Entity } from '../../_models/index';

@Injectable()
export class UserDataService {
    // Properties
    private currentuserUrl = 'http://127.0.0.1:8000/currentuser/?format=json';  // URL to runserver local web api
    private entitiesbyuserUrl = 'http://127.0.0.1:8000/entitiesbyuser/?format=json';
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

    // private helper methods
    private handleError(error: any): Promise<any> {
        console.error('This is the error handler speaking:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
