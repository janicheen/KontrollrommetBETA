// Angular Dependencies
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
// rxjs Dependencies
import 'rxjs/add/operator/toPromise';
// Angular2 JWT dependencies
import { AuthHttp } from 'angular2-jwt';

// Models
import { Entity, Person, Subject,  Meeting, MeetingParticipant, MeetingSubject } from '../../_models/index';
import { MeetingCategory } from '../../_categories/index';

@Injectable()
export class MeetingService {

  // get token from storage
  private usertoken = localStorage.getItem('UserToken') 
  
  // URLs to api server requests NB! Needs to be solved better
  private meetingsUrl = 'http://127.0.0.1:8000/meetings/?format=json';  
  private entitiesbyuserUrl = 'http://127.0.0.1:8000/entitiesbyuser/?format=json';
  private personsbyentityUrl = 'http://127.0.0.1:8000/personsbyentity/';
  private subjectsbyentityUrl = 'http://127.0.0.1:8000/subjectsbyentity/';
  private meetingcategoriesUrl = 'http://127.0.0.1:8000/meetingcategories/';
  private participantsUrl = 'http://127.0.0.1:8000/participants/';
  private meetingsubjectsUrl = 'http://127.0.0.1:8000/meetingsubjects/';
  
  // Sets the nescessary hearder to go with http request
  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private JWTheader = new Headers({'Authorization': 'JWT ' + this.usertoken})
  private JWToptions = new RequestOptions({ headers: this.JWTheader, params: {'id': 1}});
  private options = new RequestOptions({ headers: this.headers});
  
  constructor(private Http: Http, private authHttp: AuthHttp) { }
  
  // Get list of meetings from API
  getMeetings(): Promise<Meeting[]> {
    console.log('getting meetings from API...');
    return this.authHttp
      .get(this.meetingsUrl)
      .toPromise()
      .then(response => response.json() as Meeting[])
      .catch(this.handleError);
  }
 
  getEntities(): Promise<Entity[]> {
    console.log("getting user entities from API...")
    return this.authHttp
      .get(this.entitiesbyuserUrl)
      .toPromise()
      .then(response => response.json() as Entity[])
      .catch(this.handleError);
  }

  getParticipants(ident): Promise<Person[]> {
  console.log("getting participants from API...")
  this.options = new RequestOptions({params: {'id': ident}});
    return this.authHttp
      .get(this.personsbyentityUrl, this.options)
      .toPromise()
      .then(response => response.json() as Person[])
      .catch(this.handleError);
  }
  getMeetingSubjects(ident): Promise<Subject[]> {
  console.log("getting subjects from API...")
  this.options = new RequestOptions({params: {'id': ident}});
    return this.authHttp
      .get(this.subjectsbyentityUrl, this.options)
      .toPromise()
      .then(response => response.json() as Subject[])
      .catch(this.handleError);
  }
  
  getMeetingCategories(): Promise<MeetingCategory[]> {
    console.log("getting meeting categories...")
    return this.authHttp
      .get(this.meetingcategoriesUrl)
      .toPromise()
      .then(response => response.json() as MeetingCategory[])
      .catch(this.handleError);
  }

  createMeeting(data): Promise<Meeting> {
    return this.authHttp
      .post(this.meetingsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Meeting)
      .catch(this.handleError);
  }

  createParticipants(data): Promise<MeetingParticipant[]> {
    return this.authHttp
      .post(this.participantsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as MeetingParticipant)
      .catch(this.handleError);
  }
  
  createMeetingSubjects(data): Promise<MeetingSubject[]> {
    return this.authHttp
      .post(this.meetingsubjectsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as MeetingSubject)
      .catch(this.handleError);
  }

  //*** NOT IN USE ***
  getMeeting(id: number): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${id}`;
  return this.Http.get(url)
    .toPromise()
    .then(response => response.json() as Meeting)
    .catch(this.handleError);
  }
  
  //*** NOT IN USE ***
  update(meeting: Meeting): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${meeting.id}`;
  return this.Http
    .put(url, JSON.stringify(meeting), {headers: this.headers})
    .toPromise()
    .then(() => meeting)
    .catch(this.handleError);
  }
  
  //*** NOT IN USE ***
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
