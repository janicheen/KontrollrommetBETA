import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Meeting } from './meeting';

@Injectable()
export class MeetingService {
  private meetingsUrl = 'api/meetings';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }
 
  getMeetings(): Promise<Meeting[]> {
    return this.http.get(this.meetingsUrl)
      .toPromise()
      .then(response => response.json().data as Meeting[])
      .catch(this.handleError);
  }
 
  getMeeting(id: number): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Meeting)
    .catch(this.handleError);
  }

  update(meeting: Meeting): Promise<Meeting> {
  const url = `${this.meetingsUrl}/${meeting.id}`;
  return this.http
    .put(url, JSON.stringify(meeting), {headers: this.headers})
    .toPromise()
    .then(() => meeting)
    .catch(this.handleError);
  }

  create(name: string): Promise<Meeting> {
  return this.http
    .post(this.meetingsUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Meeting)
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
  const url = `${this.meetingsUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
