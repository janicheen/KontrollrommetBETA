import { Component, OnInit } from '@angular/core';

import { Meeting, Entity }    from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html'
})

export class MeetingFormComponent {

entities: Entity[];

powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

model = new Meeting;

submitted = false;

constructor(
    private meetingService: MeetingService
) { }

getEntities(): void {
    this.meetingService.getEntities()
    .then(entities => this.entities = entities);
 //   let anentity = this.entities[1]
//    console.log(anentity.entity_name)
    }

// What to do when the component initiates
  ngOnInit(): void {
    this.getEntities();
  }

onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}