import { Component, OnInit } from '@angular/core';
import { Subject } from '../../_models/index';

@Component({
  selector: 'app-new-meetingsubject',
  templateUrl: './new-meetingsubject.component.html',
  styleUrls: ['./new-meetingsubject.component.css']
})
export class NewMeetingsubjectComponent implements OnInit {
  new_subject = new Subject;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.new_subject)
  }

}
