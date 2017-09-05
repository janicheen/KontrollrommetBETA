import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Meeting, Entity} from '../../_models/index';
// Internal Services
import { MeetingService } from '../_services/meeting.service';

@Component({
  selector: 'my-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})

export class MeetingsComponent implements OnInit {
  // Variables to be used in component
  meetinglist: Meeting[];
  entities: Entity[];
  selectedMeeting: Meeting;

  // Something wize about this part...
  constructor(
    private router: Router,
    private meetingService: MeetingService) { }

  // Method for displaying a meetings list
  getMeetings(): void {
    this.meetingService.getMeetings()
    .then(meetings => {
      this.meetinglist = meetings
    });
    }

  // What to do when the component initiates
  ngOnInit(): void {
    this.getMeetings();
  }
  // When a meeting is selected from the list
  onSelect(meeting: Meeting): void {
    this.selectedMeeting = meeting;
  }

  onClickNewMeetingRequest(): void {
    this.router.navigate(['/meetingform']);
  }

// ** NOT IN USE ***
  delete(meeting: Meeting): void {
  this.meetingService
      .delete(meeting.id)
      .then(() => {
        this.meetinglist = this.meetinglist.filter(h => h !== meeting);
        if (this.selectedMeeting === meeting) { this.selectedMeeting = null; }
      });
  }
  
}
