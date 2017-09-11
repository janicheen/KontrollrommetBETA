// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// rxjs Dependencies
import 'rxjs/add/operator/toPromise';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';

// Models
import { User } from '../../_models/index';

@Injectable()
export class UserService {

    private currentuserUrl = 'http://127.0.0.1:8000/currentuser/?format=json';  // URL to runserver local web api
    private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});

    private user: User;

    constructor(
        private Http: Http,
        private authHttp: AuthHttp
    ) { }

    getAll() {
        return this.authHttp.get('/api/users').map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.authHttp.get('/api/users/' + id).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.authHttp.post('/api/users', user).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.authHttp.put('/api/users/' + user.id, user).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.authHttp.delete('/api/users/' + id).map((response: Response) => response.json());
    }

    // private helper methods
    private handleError(error: any): Promise<any> {
        console.error('This is the error handler speaking:', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
