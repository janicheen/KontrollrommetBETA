// Angular dependencies
import { Component, OnInit } from '@angular/core';
// Models
import { Meeting, Person, Entity, Subject, MeetingCategory }    from '../_models/index';
// Services
import { MeetingService } from '../_services/index';

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html',
  styleUrls: [ './meeting-form.component.css' ]
})

export class MeetingFormComponent {

entities: Entity[];
participants: Person[];
meetingsubjects: Subject[];
categories: MeetingCategory[];
selectedEntity: Entity
idnumber: Number

model = new Meeting;
submitted = false;

constructor(
    private meetingService: MeetingService
) { }

getEntities(): void {
    this.meetingService.getEntities()
    .then(entities => this.entities = entities);
}

getMeetingCategories(): void {
    this.meetingService.getMeetingCategories()
    .then(categories => this.categories = categories);
}

getParticipants(ident): void {
    console.log("gotten this id", ident)
    this.meetingService.getParticipants(ident)
    .then(participants => this.participants = participants);
    }

getMeetingSubjects(ident): void {
    console.log("gotten this id", ident)
    this.meetingService.getMeetingSubjects(ident)
    .then(meetingsubjects => this.meetingsubjects = meetingsubjects);
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
    this.getParticipants(this.model.entity.entity_id);
    this.getMeetingSubjects(this.model.entity)
}

onSubmit() {
    console.dir(this.model)
    this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}