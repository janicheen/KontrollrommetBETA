import { Component, OnInit } from '@angular/core';
// Internal Services
import { MeetingService } from '../_services/meeting.service';
// Models
import { Meeting, Entity} from '../../_models/index';

@Component({
    selector: 'app-meetinglist',
    templateUrl: 'meeting-list.component.html'
})
export class MeetingListComponent implements OnInit {
    // Properties of the component
    meetinglist: Meeting[];
    selectedmeeting: Meeting;

    constructor(private meetingService: MeetingService) { }

    // Method for making a meetings list
    makeMeetingList(): void {
        this.meetingService.getMeetings()
        .then(meetings => {
            this.meetinglist = meetings;
        });
    }

    // When a meeting is selected from the list
    onSelect(meeting: Meeting): void {
        this.selectedmeeting = meeting;
        console.log(this.selectedmeeting);
    }

    ngOnInit() {
        this.makeMeetingList();
     }

}
