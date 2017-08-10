import { Component, OnInit } from '@angular/core';

import { Meeting, Person, Entity, Subject }    from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html'
})

export class MeetingFormComponent {

entities: Entity[];
participants: Person[];
meetingsubjects: Subject[];
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
    // Populate entity field
    this.getEntities();
}

onEntityChange(): void {
this.getParticipants(this.model.entity);
this.getMeetingSubjects(this.model.entity)
}
onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}