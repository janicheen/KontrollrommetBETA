import { Component, OnInit } from '@angular/core';

import { Meeting } from './meeting';
import { MeetingService } from './meeting.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  meetinges: Meeting[] = [];

  constructor(private meetingService: MeetingService) { }

  ngOnInit(): void {
    this.meetingService.getMeetings()
      .then(meetinges => this.meetinges = meetinges.slice(1, 5));
  }
}
