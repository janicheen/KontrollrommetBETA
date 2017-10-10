import { Component, OnInit } from '@angular/core';
// Component collective Services
import { MeetingService } from '../meeting.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})

export class MeetingsComponent implements OnInit {

  constructor(
    private meetingService: MeetingService
    ) { }

  ngOnInit(): void {
  }

  //  Input reactions worth passing to Component Collective Service
  onNewMeetingRequest(): void {
    console.log('passing new meeting request signal to component collective service');
    this.meetingService.newMeetingRequest();
  }

}
