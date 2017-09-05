// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgModule }       from '@angular/core';

// Models
import { Meeting, User } from '../_models/index';

// External Services
import { MeetingService } from '../meetings/index';
import { UserService } from '../authentication/index';

// Components
import { MeetingsComponent } from '../meetings/index'

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
