import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

// Internal Services
import { MeetingService } from '../meeting.service';
import { DataService } from '../../_services/data.service';
// External Services
import { AppStore } from '../../app-store';

// Models
import { Meeting, Entity, MeetingParticipant} from '../../_models/index';

@Component({
    selector: 'app-meetinglist',
    templateUrl: 'meeting-list.component.html',
 })
export class MeetingListComponent implements OnInit {
    // Properties of the component
    meetings: MeetingParticipant[];
    selectedmeeting: MeetingParticipant;

    constructor(
        private meetingService: MeetingService,
        private dataService: DataService,
        private appStore: AppStore
    ) {
        this.appStore
        .changes
        .pluck('meetingparticipations')
        .subscribe((meetings: MeetingParticipant[]) => this.meetings = meetings);
     }

     // When a meeting is selected from the list
    onSelect(meeting: MeetingParticipant): void {
        this.selectedmeeting = meeting;
        console.log(this.selectedmeeting);
    }

    ngOnInit() {
    }

}
