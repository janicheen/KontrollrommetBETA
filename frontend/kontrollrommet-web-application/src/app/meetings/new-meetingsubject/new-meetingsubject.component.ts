// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Component Collective Services
import { MeetingService } from '../meeting.service';
// Models
import { Plan } from '../../_models/plan';

@Component({
    selector: 'app-new-meetingsubject',
    templateUrl: './new-meetingsubject.component.html',
    styleUrls: ['./new-meetingsubject.component.css']
})
export class NewMeetingsubjectComponent implements OnInit {
    // Component properties
    plan = new Plan;
    constructor(
        private meetingService: MeetingService
    ) { }

    ngOnInit() {
    }

    onSubmit(form: NgForm) {
        console.log('passing input data on to meeting service');
        const send_model = {
            plan: this.plan
        };
        this.meetingService.sendNewplandata(send_model);
    }

}
