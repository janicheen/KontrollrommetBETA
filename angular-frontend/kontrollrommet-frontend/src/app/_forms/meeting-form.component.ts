// Angular dependencies
import { Component, OnInit } from '@angular/core';
// Models
import { Meeting, Person, Entity, Subject, MeetingCategory, PersonToEntity, MeetingSubject, MeetingParticipant } from '../_models/index';
// Services
import { MeetingService } from '../_services/index';

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
}
// What to do when entity field is chosen
onEntityChange(): void {
    // Populate these fields
    this.getParticipants(this.model.entity.id);
    this.getMeetingSubjects(this.model.entity.id)
}

onSubmit() {
    console.dir(this.model)
    this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}