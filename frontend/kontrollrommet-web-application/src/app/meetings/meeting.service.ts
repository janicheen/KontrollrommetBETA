// Angular Dependencies
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

// Process Models
import { Action } from '../_process/action';
// Application Models
import { Person, Plan, Entity, Meeting, MeetingParticipant, MeetingSubject } from '../_models/index';
import { MeetingCategory } from '../_categories/index';
// Services
import { ActionService } from '../_services/action.service';
import { DataService } from '../_services/data.service';

@Injectable()
export class MeetingService {
    // Collective Component Service properties
    chosen_entity: Entity;

    constructor(
        private actionService: ActionService,
        private dataService: DataService,
        private router: Router,
        public datepipe: DatePipe,
   ) { }

    // Processes that take input from components, process them, calls for actions and deals with results

    // Process with no result and no call for global action
    newMeetingRequest() {
        console.log('Received signal to manke new meeting request');
        console.log('rerouting to meetingform - no need to relatet to action service');
        this.router.navigate(['/meetingform']);
    }

    // Process with no result and no call for global action
    storeChosenEntity(chosen_entity) {
        this.chosen_entity = chosen_entity;
    }

    // Process with result and global action
    getParticipants(entity_id) {
        console.log('Received signal to get participants');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'get-objects';
        action.payload = ['meeting participants', 'client_views/personsbyentity', entity_id];
        return this.actionService.doAction(action);
    }

    // Process with result and global action
    getMeetingSubjects(entity_id) {
        console.log('Received signal to get meeting subjects');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'get-objects';
        action.payload = ['meeting subjects', 'client_views/plansbyentity', entity_id];
        return this.actionService.doAction(action);
    }

    sendNewmeetingdata(send_model) {
        console.log('Received data to create new meeting');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'create-meeting';
        action.payload = this.constructNewmeetingdata(send_model);
        this.actionService.doAction(action);
    }

    sendNewplandata(send_model) {
        console.log('Received data to create new meeting subject');
        console.log('Placing data in actionobject and passing it to actionservice');
        let action = new Action;
        action.action = 'create-plan';
        let plan = new Plan;
        plan.headline = send_model.plan.headline;
        plan.description = send_model.plan.description;
        plan.chosen_entity_id = this.chosen_entity.id;
        action.payload = plan;
        this.actionService.doAction(action);
    }
    // Helperfunction
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
}
