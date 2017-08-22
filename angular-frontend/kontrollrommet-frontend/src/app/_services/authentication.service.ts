import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { tokenNotExpired } from 'angular2-jwt';
import { AuthHttp } from 'angular2-jwt';

import { User } from '../_models/index';


@Injectable()
export class AuthenticationService {
    // Url and headers set for request
    private gettokenUrl = 'http://127.0.0.1:8000/api-token-auth/';
    private getcurrentuserUrl = 'http://127.0.0.1:8000/currentuser/?format=json';
    
    private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });
    
    constructor(
        private http: Http,
        private authHttp: AuthHttp 
    ) { }
    
    // Method for getting data on currently logged in user
    getCurrentUser(): Observable<User> {
        console.log("getting current user...")
        return this.authHttp.get(this.getcurrentuserUrl)
        .map(res => res.json());
    }

    // Login method
    login(username: string, password: string) {
        return this.http
            .post(this.gettokenUrl, JSON.stringify({ username: username, password: password }), this.options)
            .map((response: Response) => {
                // login is successful if there's a jwt token in the response
                let JWTtoken = response.json();
                if (JWTtoken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('UserToken', JWTtoken.token);
                    console.log("here's the user object", JWTtoken)
                    console.log("this is what is in the local storrage, UserToken", localStorage.getItem('UserToken'))
                }
                return JWTtoken;
            });
    }
    
    // Logout method
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('UserToken');
    }

    // Check if someone is logged in
    loggedIn() {
        return tokenNotExpired('UserToken');
    }

    

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}