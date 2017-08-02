import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Meeting }         from '../_models/index';
import { MeetingService }  from '../_services/index';
@Component({
  selector: 'meeting-detail',
  templateUrl: './meeting-detail.component.html',
  styleUrls: [ './meeting-detail.component.css' ]
})
export class MeetingDetailComponent implements OnInit {
  meeting: Meeting;

  constructor(
    private meetingService: MeetingService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.meetingService.getMeeting(+params.get('id')))
      .subscribe(meeting => this.meeting = meeting);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
  this.meetingService.update(this.meeting)
    .then(() => this.goBack());
  }
}
