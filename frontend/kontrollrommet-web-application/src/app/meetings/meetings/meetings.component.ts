import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: [ './meetings.component.css' ]
})

export class MeetingsComponent implements OnInit {

  constructor(
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  onClickNewMeetingRequest(): void {
    this.router.navigate(['/meetingform']);
  }

}
