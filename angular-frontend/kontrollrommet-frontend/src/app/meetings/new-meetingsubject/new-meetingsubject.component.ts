import { Component, OnInit } from '@angular/core';
import { Subject } from '../../_models/index';

import { UserDataService } from '../../initialization/_services/user-data.service';

@Component({
    selector: 'app-new-meetingsubject',
    templateUrl: './new-meetingsubject.component.html',
    styleUrls: ['./new-meetingsubject.component.css']
})

export class NewMeetingsubjectComponent implements OnInit {
    new_subject = new Subject;
    submitted = false;
    constructor(
        private userdataService: UserDataService
    ) {   }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.new_subject);
        // Set up a send model, populate this with correct data for POST case
        let send_model = {};
        console.dir(send_model);
        // Get case as return from API, and use this in POST to subject
        this.userdataService.createCase(send_model);

/*
        .then(res => {
            console.log(res);
            // set correct data for sending subject
            let send_subject = {};
            console.dir(send_subject);
            let subject = this.userdataService.createSubject(send_subject).then(res => {
                let send_subjecttoentityrelation = {};
                this.userdataService.createSubjectToEntityRelation(send_subjecttoentityrelation);
            });
        });
         */
        this.submitted = true;
    }
}
