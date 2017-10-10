// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Main Services
import { AppStore } from '../../app-store';
// Component Collective Services
import { MeetingService } from '../meeting.service';
// Dragula service
import { DragulaService } from 'ng2-dragula/ng2-dragula';
// Models
import { PersonToEntityRelation } from '../../_models/persontoentityrelation';
import { EntityToPlanRelation } from '../../_models/entitytoplanrelation';
import { Meeting } from '../../_models/index';

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
    chosen_persons = new Array<PersonToEntityRelation>();
    chosen_subjects = new Array<EntityToPlanRelation>();
    submitted = false;

    constructor(
        private appStore: AppStore,
        private meetingService: MeetingService,
        private dragulaService: DragulaService
    ) { }

    ngOnInit(): void {}

    //  Input reactions worth passing to Component Collective Service
    onChangeEntity(): void {
        console.log('An entity was chosen in entity field');
        const chosen_entity = this.meeting.executive_entity;
        console.log('Ask Component Collective to store chosen entity for the rest of the component collective to see');
        this.meetingService.storeChosenEntity(chosen_entity);
        console.log('Asking Component Collective Service to get participants data');
        this.meetingService.getParticipants(chosen_entity.id)
        .subscribe(data => {
            this.appStore.updateState('is_loading', false);
            console.log('populating suggested persons with data', data);
            this.suggested_persons = data;
         });
        console.log('Asking Component Collective Service to get meeting sucjects data');
        this.meetingService.getMeetingSubjects(chosen_entity.id)
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
}
