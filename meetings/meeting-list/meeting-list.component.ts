import { Component, OnInit } from '@angular/core';
// Internal Services
import { MeetingService } from '../_services/meeting.service';
// External Services
import { UserDataService } from '../../initialization/_services/user-data.service';

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

    constructor(
        private meetingService: MeetingService,
        private userDataService: UserDataService) { }

    // Method for making a meetings list
    makeMeetingList(): void {
        this.userDataService.getMeetingsByUser()
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
