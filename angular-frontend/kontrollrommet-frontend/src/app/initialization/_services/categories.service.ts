// Angular Dependencies
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
// rxjs Dependencies
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';

// Models
import { MeetingCategory } from '../../_categories/index';

@Injectable()
export class CategoriesService {

    private meetingcategoriesUrl = 'http://127.0.0.1:8000/meetingcategories/';
  // Sets the nescessary hearder to go with http request
  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers});

  constructor(
    private authHttp: AuthHttp
  ) { }

  getMeetingCategories(): Promise<MeetingCategory[]> {
    console.log('getting meeting categories...');
    return this.authHttp
      .get(this.meetingcategoriesUrl)
      .toPromise()
      .then(response => response.json() as MeetingCategory[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
