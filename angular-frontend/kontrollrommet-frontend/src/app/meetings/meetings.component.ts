import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meeting } from '../_models/index';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'my-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})
export class MeetingsComponent implements OnInit {
  meetings: Meeting[];
  selectedMeeting: Meeting;

  constructor(
    private router: Router,
    private meetingService: MeetingService) { }

  getMeetings(): void {
    this.meetingService.getMeetings()
    .then(meetings => this.meetings = meetings);
  }

  ngOnInit(): void {
    this.getMeetings();
  }

  onSelect(meeting: Meeting): void {
    this.selectedMeeting = meeting;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMeeting.id]);
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
