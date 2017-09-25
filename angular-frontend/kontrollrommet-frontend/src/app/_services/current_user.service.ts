// Angular dependencies
import { Injectable } from '@angular/core';
// rxjs Dependencies
import { Observable } from 'rxjs/Observable';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';
// Models
import { User } from '../_models/index';
import { Entity, Meeting } from '../_models/index';

@Injectable()
export class CurrentUserService {

    constructor(
        private authHttp: AuthHttp
    ) { }

    // Method for getting data on currently logged in user
    getCurrentUser(): Observable<User> {
        console.log('getting current user...');
        return this.authHttp.get('currentuser/')
        .map(res => res.json())
        .catch(this.handleError);
    }

    // private helper methods
    private handleError(error: any): Promise<any> {
        console.error('This is the error handler speaking:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
