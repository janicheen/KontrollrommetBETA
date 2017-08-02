import { Component, OnInit } from '@angular/core';

import { Meeting } from '../_models/meeting';
import { MeetingService } from '../_services/index';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  meetings: Meeting[] = [];

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getMeetings()
      .then(meetings => this.meetings = meetings.slice(1, 5));
  }
}
