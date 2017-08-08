import { Component } from '@angular/core';

import { Meeting }    from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'meeting-form',
  templateUrl: './meeting-form.component.html'
})

export class MeetingFormComponent {

powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

model = new Meeting;

submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}