// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgModule }       from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Meeting, User } from '../../_models/index';
// External Services
import { MeetingService } from '../../meetings/_services/meeting.service';
import { UserService, AuthenticationService } from '../../authentication/index';
import { AlertService } from '../index';
// Components
import { MeetingsComponent } from '../../meetings/meetings/meetings.component'

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  currentuser: User
  loggedin: Boolean
  meetings: Meeting[] = [];
  
  constructor(
    private authService: AuthenticationService,
    private alertService: AlertService,
    private router: Router,
    private meetingService: MeetingService,
    private userService: UserService
  ) {
    const user$ = this.authService.getCurrentUser();
    user$.subscribe(
      user => this.currentuser = user,
      error => this.alertService.error(error)
    );
   }

  logout(): void {
    alert("You are logging out")
    this.authService.logout()
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.meetingService.getMeetings()
      .then(meetings => this.meetings = meetings.slice(0, 3));
    this.userService.getCurrentUser()
      .then(user => this.currentuser = user)
  }
}
