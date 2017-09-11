import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Meeting, Entity} from '../../_models/index';
// Internal Services
import { MeetingService } from '../_services/meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})

export class MeetingsComponent implements OnInit {
  // Variables to be used in component
  meetinglist: Meeting[];
  entities: Entity[];
//  @Input() selectedmeeting: Meeting;

  // Something wize about this part...
  constructor(
    private router: Router,
    private meetingService: MeetingService) { }

  // What to do when the component initiates
  ngOnInit(): void {
  }


  onClickNewMeetingRequest(): void {
    this.router.navigate(['/meetingform']);
  }

}
