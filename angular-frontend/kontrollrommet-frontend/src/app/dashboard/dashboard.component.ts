import { Component, OnInit } from '@angular/core';

import { Meeting, User } from '../_models/index';
import { MeetingService, UserService } from '../_services/index';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  meetings: Meeting[] = [];
  currentuser: User
  constructor(
    private meetingService: MeetingService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.meetingService.getMeetings()
      .then(meetings => this.meetings = meetings.slice(0, 3));
    this.userService.getCurrentUser()
      .then(user => this.currentuser = user)
  }
}
