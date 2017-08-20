import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { AuthHttp } from 'angular2-jwt';

import { Meeting, Entity, Person, Subject, MeetingCategory } from '../_models/index';

@Injectable()
export class MeetingService {
  
  // for test purposes, can probably be deleted now:
  // private meetingsUrl = 'api/meetings';  // URL to web api
  private usertoken = localStorage.getItem('UserToken') 
  
  private meetingsUrl = 'http://127.0.0.1:8000/meetings/?format=json';  // URL to runserver local web api
  private entitiesbyuserUrl = 'http://127.0.0.1:8000/entitiesbyuser/?format=json';
  private personsbyentityUrl = 'http://127.0.0.1:8000/personsbyentity/';
  private subjectsbyentityUrl = 'http://127.0.0.1:8000/subjectsbyentity/';
  private meetingcategoriesUrl = 'http://127.0.0.1:8000/meetingcategories/';

  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private JWTheader = new Headers({'Authorization': 'JWT ' + this.usertoken})
  private JWToptions = new RequestOptions({ headers: this.JWTheader, params: {'id': 1}});
  private options = new RequestOptions({ headers: this.headers});
  
  constructor(private Http: Http, private authHttp: AuthHttp) { }
  
  getEntities(): Promise<Entity[]> {
    console.log("getting user entities from API...")
    return this.Http
      .get(this.entitiesbyuserUrl, this.JWToptions)
      .toPromise()
      .then(response => response.json() as Entity[])
      .catch(this.handleError);
  }

  getParticipants(ident): Promise<Person[]> {
  console.log("getting participants from API...")
  this.JWToptions = new RequestOptions({ headers: this.JWTheader, params: {'id': ident}});
    return this.Http
      .get(this.personsbyentityUrl, this.JWToptions)
      .toPromise()
      .then(response => response.json() as Person[])
      .catch(this.handleError);
  }
  getMeetingSubjects(ident): Promise<Subject[]> {
  console.log("getting subjects from API...")
  this.JWToptions = new RequestOptions({ headers: this.JWTheader, params: {'id': ident}});
    return this.Http
      .get(this.subjectsbyentityUrl, this.JWToptions)
      .toPromise()
      .then(response => response.json() as Person[])
      .catch(this.handleError);
  }
  getMeetings(): Promise<Meeting[]> {
    console.log("getting meetings...")
    return this.authHttp
      .get(this.meetingsUrl)
      .toPromise()
      .then(response => response.json() as Meeting[])
      .catch(this.handleError);
  }
 
  getMeetingCategories(): Promise<MeetingCategory[]> {
    console.log("getting categories...")
    return this.Http
      .get(this.meetingcategoriesUrl, this.JWToptions)
      .toPromise()
      .then(response => response.json() as Meeting[])
      .catch(this.handleError);
  }
  getMeeting(id: number): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${id}`;
  return this.Http.get(url)
    .toPromise()
    .then(response => response.json() as Meeting)
    .catch(this.handleError);
  }

  update(meeting: Meeting): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${meeting.id}`;
  return this.Http
    .put(url, JSON.stringify(meeting), {headers: this.headers})
    .toPromise()
    .then(() => meeting)
    .catch(this.handleError);
  }

  create(name: string): Promise<Meeting> {
  return this.Http
    .post(this.meetingsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Meeting)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const url = `${this.meetingsUrl}/${id}`;
  return this.Http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
