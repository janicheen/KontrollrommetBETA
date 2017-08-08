import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meeting} from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'my-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})
export class MeetingsComponent implements OnInit {
  // Variables to be used in component
  meetings: Meeting[];
  selectedMeeting: Meeting;

  // Something wize about this part...
  constructor(
    private router: Router,
    private meetingService: MeetingService) { }

  // Method for displaying a meetings list
  getMeetings(): void {
    this.meetingService.getMeetings()
    .then(meetings => this.meetings = meetings);
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

  add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.meetingService.create(name)
    .then(meeting => {
      this.meetings.push(meeting);
      this.selectedMeeting = null;
    });
  }

  delete(meeting: Meeting): void {
  this.meetingService
      .delete(meeting.id)
      .then(() => {
        this.meetings = this.meetings.filter(h => h !== meeting);
        if (this.selectedMeeting === meeting) { this.selectedMeeting = null; }
      });
  }
}
