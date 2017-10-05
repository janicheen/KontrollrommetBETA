// Angular dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// rxjs Dependencies
import { Observable } from 'rxjs/Observable';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';
// Models
import { User } from '../_models/index';
import { Entity, Meeting } from '../_models/index';

@Injectable()
export class CurrentUserService {
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private authHttp: AuthHttp,
        private http: Http
    ) { }

    createUser(user) {
        console.log('creating user');
        return this.authHttp.post('createuser/', JSON.stringify({ user }), this.options);
    }
    // Method for getting data on currently logged in user
    getCurrentUser(): Observable<User> {
        console.log('getting current user...');
        return this.authHttp.get('currentuser/')
        .map(res => res.json());
    }

    // Login method
    loginUserandgetToken(username: string, password: string) {
        return this.http.post('api-token-auth/', JSON.stringify({ username: username, password: password }), this.options)
            .map((response: Response) => {
                // login is successful if there's a jwt token in the response
                const JWTtoken = response.json();
                if (JWTtoken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('UserToken', JWTtoken.token);
                    console.log('here is the user object', JWTtoken);
                    console.log('this is what is in the local storrage, UserToken', localStorage.getItem('UserToken'));
                }
                return JWTtoken;
            });
    }
    // private helper methods
    private handleError(error: any): Promise<any> {
        console.error('This is the error handler speaking:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
