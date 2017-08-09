import { Component, OnInit } from '@angular/core';

import { Meeting, Person, Entity }    from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html'
})

export class MeetingFormComponent {

entities: Entity[];
participants: Person[];

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
    this.meetingService.getParticipants(ident)
    .then(participants => this.participants = participants);
    }

// What to do when the component initiates
  ngOnInit(): void {
    this.getEntities();
    this.getParticipants(2);
  }

onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}