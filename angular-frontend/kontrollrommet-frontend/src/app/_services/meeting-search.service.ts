import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Meeting } from '../_models/index';
 
@Injectable()
export class MeetingSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<Meeting[]> {
    return this.http
               .get(`api/meetings/?name=${term}`)
               .map(response => response.json().data as Meeting[]);
  }
}