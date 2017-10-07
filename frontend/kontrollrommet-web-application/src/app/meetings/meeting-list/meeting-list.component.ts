import { Component, OnInit } from '@angular/core';

// Services
import { ActionService } from '../../_services/action.service';
// Models
import { Meeting, Entity, MeetingParticipant} from '../../_models/index';

@Component({
    selector: 'app-meetinglist',
    templateUrl: 'meeting-list.component.html',
    styleUrls: [ './meeting-list.component.css' ]
 })

export class MeetingListComponent implements OnInit {
    // Properties of the component
    meetings = this.actionService.subscribeTo('meetingparticipations');
    selectedmeeting: MeetingParticipant;

    constructor(
        private actionService: ActionService,
    ) {}

     ngOnInit() {}

     // When a meeting is selected from the list
    onSelect(meeting: MeetingParticipant): void {
        this.selectedmeeting = meeting;
        console.log('selected this meeting', this.selectedmeeting);
    }


}
