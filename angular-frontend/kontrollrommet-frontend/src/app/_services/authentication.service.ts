import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    // Url and headers set for request
    private url = 'http://127.0.0.1:8000/api-token-auth/';
    private headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers });
    
    constructor(private http: Http) { }
    
    // Login method to be called
    login(username: string, password: string) {
        return this.http
            .post(this.url, JSON.stringify({ username: username, password: password }), this.options)
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

    // Logout method to be called
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUserToken');
    }
}