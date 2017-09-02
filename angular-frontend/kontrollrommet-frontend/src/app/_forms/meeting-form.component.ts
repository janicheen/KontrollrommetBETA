// Angular dependencies
import { Component, OnInit } from '@angular/core';
// Models
import { Meeting, Person, Entity, Subject, MeetingCategory, PersonToEntity, MeetingSubject, MeetingParticipant } from '../_models/index';
// Services
import { MeetingService } from '../_services/index';
import { DragulaService } from "ng2-dragula";

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: [ './meeting-form.component.css' ]
})

export class MeetingFormComponent {

possible_entities: Entity[];
possible_participants: Person[];
possible_meetingsubjects: Subject[];
possible_categories: MeetingCategory[];

model = new Meeting;
submitted = false;

constructor(
    private meetingService: MeetingService
) { }

getEntities(): void {
    this.meetingService.getEntities()
    .then(entities => this.possible_entities = entities);
}

getMeetingCategories(): void {
    this.meetingService.getMeetingCategories()
    .then(categories => this.possible_categories = categories);
}

getParticipants(_id): void {
    console.log("gotten this id", _id)
    this.meetingService.getParticipants(_id)
    .then(participants => this.possible_participants = participants);
    }

getMeetingSubjects(_id): void {
    console.log("gotten this id", _id)
    this.meetingService.getMeetingSubjects(_id)
    .then(meetingsubjects => this.possible_meetingsubjects = meetingsubjects);
    }

// What to do when the component initiates
ngOnInit(): void {
    // Populate these fields
    this.getEntities();
    this.getMeetingCategories();
    this.model.participants = [];
    this.model.meeting_subjects = [];
    
}
// What to do when entity field is chosen
onChangeEntity(): void {
    // Populate these fields
    this.getParticipants(this.model.entity.id);
    this.getMeetingSubjects(this.model.entity.id)
}

onSelectPerson(person: Person) {
    // Construct instance of MeetingParticipant from selected item, and add it as participant in the current meeting instance 
    var meetingparticipant = new MeetingParticipant;
    meetingparticipant.person = person;
    this.model.participants.push(meetingparticipant);
    // Remove the selected instance from list of possible participants
    let index: number = this.possible_participants.indexOf(person);
    if (index !== -1) {
        this.possible_participants.splice(index, 1);
    }
}

onSelectSubject(subject: Subject) {
    // Construct instance of MeetingSubject from selected item, and add it as meeting subject in the current meeting instance 
    var meetingsubject = new MeetingSubject;
    meetingsubject.subject = subject;
    // meetingsubject.listposition_on_request = TBA add position.
    this.model.meeting_subjects.push(meetingsubject);
    // Remove the selected instance from list of possible subjects
    let index: number = this.possible_meetingsubjects.indexOf(subject);
    if (index !== -1) {
        this.possible_meetingsubjects.splice(index, 1);
    }
}

onClickRemoveParticipant(participant) {
    let index: number = this.model.participants.indexOf(participant);
    if (index !== -1) {
        this.possible_participants.push(participant.person);
        this.model.participants.splice(index, 1);
    }
}

onClickRemoveSubject(meetingsubject) {
    let index: number = this.model.meeting_subjects.indexOf(meetingsubject);
    if (index !== -1) {
        this.possible_meetingsubjects.push(meetingsubject.subject);
        this.model.meeting_subjects.splice(index, 1);
    }
}

onSubmit() {

    var send_model = {
        meeting_category: null,
        entity: null,
        requested_meetdate: null,        
        participants: [],
        meeting_subjects: []
    }  ;
   
    send_model.meeting_category = this.model.meeting_category.id;
    send_model.entity = this.model.entity.id;
    send_model.requested_meetdate = this.model.requested_meetdate;
    
    for (let i in this.model.participants) {
        console.log(i)
        var send_participant: {[k: string]: any} = {};
        send_participant.is_invited = true;
        send_participant.person = this.model.participants[i].person.id;
        send_model.participants.push(
            send_participant);
    }
    for (let i in this.model.meeting_subjects) {
        console.log(i)
        var send_meetingsubject: {[k: string]: any} = {};        
        send_meetingsubject.listposition_on_request = parseInt(i);
        send_meetingsubject.subject = this.model.meeting_subjects[i].subject.id;
        send_model.meeting_subjects.push(send_meetingsubject);
    }
    console.dir(send_model)
    this.meetingService.createMeeting(send_model)
    this.submitted = true;
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}