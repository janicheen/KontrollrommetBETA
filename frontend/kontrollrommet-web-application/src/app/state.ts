import { User } from './_models/index';
import { MeetingParticipant } from './_models/index';

export class State {
    user: User;
    meetingparticipations: MeetingParticipant[];
    is_loading = false;
    is_logged_in = false;
}
