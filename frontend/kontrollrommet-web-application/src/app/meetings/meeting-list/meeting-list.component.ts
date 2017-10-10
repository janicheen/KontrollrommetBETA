// Angular Dependencies
import { Component, OnInit } from '@angular/core';
// Component collective Services
import { MeetingService } from '../meeting.service';
// Main Services
import { AppStore } from '../../app-store';
// Models
import { MeetingParticipant} from '../../_models/index';

@Component({
    selector: 'app-meetinglist',
    templateUrl: 'meeting-list.component.html',
    styleUrls: [ './meeting-list.component.css' ]
 })

export class MeetingListComponent implements OnInit {
    // Subscribed properties
    meetingparticipations = this.appStore.subscribeTo('meetingparticipations');
    // Component properties
    selected_meetingparticipation: MeetingParticipant;

    constructor(
        private appStore: AppStore
    ) {}

     ngOnInit() {}

     // Input that can be dealt with locally
    onSelect(meeting: MeetingParticipant): void {
        this.selected_meetingparticipation = meeting;
    }

}
