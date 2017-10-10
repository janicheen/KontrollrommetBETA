// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Dragula service
import { DragulaService } from 'ng2-dragula/ng2-dragula';
// Models
import { Person, Entity } from '../../_models/index';
import { PersonToEntityRelation } from '../../_models/persontoentityrelation';
import { EntityToPlanRelation } from '../../_models/entitytoplanrelation';
import { Meeting, MeetingSubject, MeetingParticipant } from '../../_models/index';
// Categories
import { MeetingCategory } from '../../_categories/index';
// Main Services
import { ActionService } from '../../_services/action.service';
import { AppStore } from '../../app-store';
import { DataService } from '../../_services/data.service';
// Component Collective Services
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: [ './new-meeting.component.css' ],
})

export class MeetingFormComponent implements OnInit {
    // Async Component properties
    entityrelations = this.appStore.subscribeTo('entityrelations');
    meeting_categories = this.appStore.subscribeTo('meeting_categories');
    // Component properties
    meeting = new Meeting;
    suggested_persons = new Array<PersonToEntityRelation>();
    suggested_subjects = new Array<EntityToPlanRelation>();
    submitted = false;
    chosen_persons = new Array<PersonToEntityRelation>();
    chosen_subjects = new Array<EntityToPlanRelation>();

    constructor(
        private actionService: ActionService,
        private dataService: DataService,
        private appStore: AppStore,
        private meetingService: MeetingService,
        private dragulaService: DragulaService
    ) { }

    ngOnInit(): void {}


    //  Input reactions worth passing to Component Collective Service
    onChangeEntity(): void {
        console.log('An entity was chosen in entity field');
        const entity_id = this.meeting.executive_entity.id;
        console.log('Asking Component Collective Service to get participants data');
        this.meetingService.getParticipants(entity_id)
        .subscribe(data => {
            this.appStore.updateState('is_loading', false);
            console.log('populating suggested persons with data', data);
            this.suggested_persons = data;
         });
        console.log('Asking Component Collective Service to get meeting sucjects data');
        this.meetingService.getMeetingSubjects(entity_id)
         .subscribe(data => {
            this.appStore.updateState('is_loading', false);
            console.log('populating suggested persons with data', data);
            this.suggested_subjects = data;
          });
    }

    onSubmit(form: NgForm) {
        console.log('passing input data on to meeting service');
        const send_model = {
            meeting: this.meeting,
            chosen_persons: this.chosen_persons,
            chosen_subjects: this.chosen_subjects
        };
        this.meetingService.sendNewmeetingdata(send_model);
    }

    // Input that can be dealt with locally

    onSelectPerson(person: PersonToEntityRelation) {
        console.log('adding chosen person to participant list...');
        this.chosen_persons.push(person);
        console.log('removing chosen person from suggested list...');
        const index: number = this.suggested_persons.indexOf(person);
        if (index !== -1) {
            this.suggested_persons.splice(index, 1);
        }
    }

    onSelectSubject(subject: EntityToPlanRelation) {
        console.log('adding chosen subject to agenda list...');
        this.chosen_subjects.push(subject);
        console.log('removing chosen subject from suggested list...');
        const index: number = this.suggested_subjects.indexOf(subject);
        if (index !== -1) {
            this.suggested_subjects.splice(index, 1);
        }
    }

    onClickRemoveMeetingParticipant(participant) {
        const index: number = this.chosen_persons.indexOf(participant);
        if (index !== -1) {
            console.log('removing chosen person from participant list...');
            this.suggested_persons.push(participant);
            console.log('putting chosen person back in suggested list...');
            this.chosen_persons.splice(index, 1);
        }
    }

    onClickRemoveSubject(meetingsubject) {
        const index: number = this.chosen_subjects.indexOf(meetingsubject);
        if (index !== -1) {
            console.log('removing chosen subject from agenda list...');
            this.suggested_subjects.push(meetingsubject);
            console.log('putting chosen subject back in suggested list...');
            this.chosen_subjects.splice(index, 1);
        }
    }

    
/*         // Set up a send model, populate this with correct data for POST meeting
        let send_model = {
            meeting_category: null,
            entity: null,
            requested_meetdate: null,
        } ;
        send_model.meeting_category = this.model.meeting_category.id;
        send_model.entity = this.model.entity.id;
        send_model.requested_meetdate = this.model.requested_meetdate;
        console.dir(send_model);

        // Get meeting as return from API, and use this in POST to paricipants and meeting subjects
        let meeting = this.meetingService.createMeeting(send_model).then(res => {
            console.log(res);
        // Loop to set correct data for sending meetingparticipants
            let send_meetingparticipants = [];
            for (let i in this.model.meetingparticipants) {
                if (this.model.meetingparticipants.hasOwnProperty(i)) {
                    console.log(i);
                    // tslint:disable-next-line:prefer-const
                    let sendparticipant = {
                        is_invited : true,
                        person : this.model.meetingparticipants[i].person.id,
                        meeting : res.id
                    };
                    send_meetingparticipants.push(sendparticipant);
                }
            }
        // Loop to set correct data for sending meeting subjects
        let send_meetingsubjects = [];
        for (let i in this.model.meetingsubjects) {
            console.log(i);
            let send_meetingsubject = {
                listposition_on_request : parseInt(i),
                listposition_on_report : parseInt(i),
                subject : this.model.meetingsubjects[i].subject.id,
                meeting : res.id
            };
        send_meetingsubjects.push(send_meetingsubject);
        }
        console.dir(send_meetingparticipants);
        console.dir(send_meetingsubjects);
        this.meetingService.createMeetingParticipants(send_meetingparticipants);
        this.meetingService.createMeetingSubjects(send_meetingsubjects);
    });
    this.submitted = true;
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
 */
}

