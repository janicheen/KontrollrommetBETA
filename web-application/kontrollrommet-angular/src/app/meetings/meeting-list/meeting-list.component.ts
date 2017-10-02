import { Component, OnInit } from '@angular/core';
// Internal Services
import { MeetingService } from '../meeting.service';
import { DataService } from '../../_services/data.service';
// External Services

// Models
import { Meeting, Entity, MeetingParticipant} from '../../_models/index';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-meetinglist',
    templateUrl: 'meeting-list.component.html'
})
export class MeetingListComponent implements OnInit {
    // Properties of the component
    meetings: MeetingParticipant[];
    meetinglist: Meeting[];
    selectedmeeting: Meeting;

    constructor(
        private meetingService: MeetingService,
        private dataService: DataService
    ) { }

     // When a meeting is selected from the list
    onSelect(meeting: Meeting): void {
        this.selectedmeeting = meeting;
        console.log(this.selectedmeeting);
    }

    ngOnInit() {
        this.dataService.meetingparticipations.subscribe(
            (data: MeetingParticipant[]) => {
                this.meetings = data;
                console.log('meetingparticipations set in component', this.meetings);
            }
        );
    }

}
