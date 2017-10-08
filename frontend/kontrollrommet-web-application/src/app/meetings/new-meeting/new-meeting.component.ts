// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Models
import { Person, Entity, Subject,  Meeting, MeetingSubject, MeetingParticipant } from '../../_models/index';
import { PersonToEntityRelation } from '../../_models/persontoentityrelation';
import { MeetingCategory } from '../../_categories/index';
import { EntityToPlanRelation } from '../../_models/entitytoplanrelation';
// Internal Services
import { MeetingService } from '../meeting.service';
// Dragula service
import { DragulaService } from 'ng2-dragula/ng2-dragula';
// External Services
import { ActionService } from '../../_services/action.service';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-new-meeting',
  templateUrl: './new-meeting.component.html',
  styleUrls: [ './new-meeting.component.css' ],
})

export class MeetingFormComponent implements OnInit {
    // Form properties
    meeting = new Meeting;
    // Template properties
    entityrelations = this.actionService.subscribeTo('entityrelations');
    meeting_categories = this.actionService.subscribeTo('meeting_categories');
    // Form properties
    suggested_persons = new Array<PersonToEntityRelation>();
    suggested_subjects = new Array<EntityToPlanRelation>();
    chosen_persons = new Array<PersonToEntityRelation>();
    chosen_subjects = new Array<EntityToPlanRelation>();

    submitted = false;

    constructor(
        private actionService: ActionService,
        private dataService: DataService,
        private meetingService: MeetingService,
        private dragulaService: DragulaService
    ) { }

    /* getsuggested_persons(_id): void {
        console.log('gotten this id', _id);
        this.meetingService.getsuggested_persons(_id)
        .then(suggested_persons => this.possible_suggested_persons = suggested_persons);
        }
 */
    /* getsuggested_subjects(_id): void {
        console.log('gotten this id', _id);
        this.meetingService.getsuggested_subjects(_id)
        .then(suggested_subjects => this.possible_suggested_subjects = suggested_subjects);
        }
 */
    ngOnInit(): void {}

    onChangeEntity(): void {
        console.log('A entity was chosen in entity field, so now im populating other fields...');
        // Populate Template by calling the data sevice
        this.dataService.getObject('meeting participants', 'client_views/personsbyentity', this.meeting.executive_entity.id)
        .subscribe(data => {
            console.log('called the Data service to get object and got this back:', data);
            this.suggested_persons = data;
         });
         this.dataService.getObject('meeting subjects', 'client_views/plansbyentity', this.meeting.executive_entity.id)
         .subscribe(data => {
             console.log('called the Data service to get object and got this back:', data);
             this.suggested_subjects = data;
          });
    }

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

    onSubmit() {
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
}

