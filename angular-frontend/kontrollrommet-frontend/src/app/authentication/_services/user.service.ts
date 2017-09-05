// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// rxjs
import 'rxjs/add/operator/toPromise';

// Models
import { User } from "../../_models/index";

@Injectable()
export class UserService {
    
    private usertoken = localStorage.getItem('UserToken') 
    private currentuserUrl = 'http://127.0.0.1:8000/currentuser/?format=json';  // URL to runserver local web api
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
    private JWTheader = new Headers({'Authorization': 'JWT ' + this.usertoken})
    private JWToptions = new RequestOptions({ headers: this.JWTheader });
  
    private user: User
    constructor(private Http: Http) { }

    getAll() {
        return this.Http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.Http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.Http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.Http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.Http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    }

    getCurrentUser(): Promise<User> {
    console.log("getting current user...")
    return this.Http
      .get(this.currentuserUrl, this.JWToptions)
      .toPromise()
      .then(response => response.json() as User)
      .catch(this.handleError);
  }
 
    // private helper methods
private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}