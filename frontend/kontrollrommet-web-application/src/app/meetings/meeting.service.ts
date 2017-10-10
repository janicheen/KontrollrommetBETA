// Angular Dependencies
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { Http, Headers, RequestOptions } from '@angular/http';
// rxjs Dependencies
import 'rxjs/add/operator/toPromise';
// Angular2 JWT dependencies
import { AuthHttp } from 'ng-jwt';
// Models
import { Action } from '../_process/action';
import { Person, Subject,  Meeting, MeetingParticipant, MeetingSubject } from '../_models/index';
import { MeetingCategory } from '../_categories/index';
// Services
import { ActionService } from '../_services/action.service';
import { DataService } from '../_services/data.service';
import { AppStore } from '../app-store';

@Injectable()
export class MeetingService {

/*   // URLs to api server requests NB! Needs to be solved better
  private meetingsUrl = 'http://127.0.0.1:8000/meetings/?format=json';
  private personsbyentityUrl = 'http://127.0.0.1:8000/personsbyentity/';
  private subjectsbyentityUrl = 'http://127.0.0.1:8000/subjectsbyentity/';
  private meetingparticipantsUrl = 'http://127.0.0.1:8000/meetingparticipants/';
  private meetingsubjectsUrl = 'http://127.0.0.1:8000/meetingsubjects/';

  // Sets the nescessary hearder to go with http request
  private headers = new Headers({'Accept': 'application/json', 'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers});

 */


    constructor(
        private actionService: ActionService,
        private appStore: AppStore,
        private router: Router,
        public datepipe: DatePipe,
        private dataService: DataService
/*     private Http: Http,
    private authHttp: AuthHttp
 */  ) { }


    // Processes that take input from components, process them, calls for actions and deals with results

    // Processes that does not need global action

    // Process with no result
    newMeetingRequest() {
        console.log('Received signal to manke new meeting request');
        console.log('rerouting to meetingform - no need to relatet to action service');
        this.router.navigate(['/meetingform']);
    }

    // Processes that go through global action

    // Process with result
    getParticipants(entity_id) {
        console.log('Received signal to get participants');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'get-objects';
        action.payload = ['meeting participants', 'client_views/personsbyentity', entity_id];
        return this.actionService.doAction(action);
    }

    // Process with result
    getMeetingSubjects(entity_id) {
        console.log('Received signal to get meeting subjects');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'get-objects';
        action.payload = ['meeting subjects', 'client_views/plansbyentity', entity_id];
        return this.actionService.doAction(action);
    }


    // ### GETS MESSY AFTER THIS POINT
    sendNewmeetingdata(send_model) {
    let meeting = this.constructNewmeetingdata(send_model);
    this.dataService.createMeeting(meeting);
    }


    constructNewmeetingdata(send_model) {
        // Construct proper data objects
        let meeting = new Meeting;
        meeting.executive_entity = send_model.meeting.executive_entity.entity.id;
        let dateobject = send_model.meeting.requested_meetdate;
        let datestring: string = dateobject.year + '-' + dateobject.month + '-' + dateobject.day;
        meeting.requested_meetdate = datestring;
        meeting.meeting_category = send_model.meeting.meeting_category.id;
        meeting.meetingparticipants_data = [];
        for (let item of send_model.chosen_persons) {
            let meeting_participant = new MeetingParticipant;
            meeting_participant.person_id = item.person.id;
            meeting_participant.is_invited = true;
            meeting.meetingparticipants_data.push(meeting_participant);
        }
        meeting.meetingsubjects_data = [];
        let i = 0; // to use in subject iterator
        for (let item of send_model.chosen_subjects) {
            let meeting_subject = new MeetingSubject;
            meeting_subject.plan_id = item.plan.id;
            meeting_subject.listposition_on_request = i;
            i++;
            meeting.meetingsubjects_data.push(meeting_subject);
        }
        return meeting;
    }

/*   createMeeting(data): Promise<Meeting> {
    return this.authHttp
      .post(this.meetingsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as Meeting)
      .catch(this.handleError);
  }
 */
/*   createMeetingParticipants(data): Promise<MeetingParticipant[]> {
    return this.authHttp
      .post(this.meetingparticipantsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as MeetingParticipant)
      .catch(this.handleError);
  }
 */
/*   createMeetingSubjects(data): Promise<MeetingSubject[]> {
    return this.authHttp
      .post(this.meetingsubjectsUrl, JSON.stringify(data), {headers: this.headers})
      .toPromise()
      .then(response => response.json() as MeetingSubject)
      .catch(this.handleError);
  }
 */

}
