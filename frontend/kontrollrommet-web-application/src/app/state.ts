import { User } from './_models/index';
import { MeetingParticipant } from './_models/index';

export class State {
    user: User;
    meetingparticipations: MeetingParticipant[];
    isLoading = false;
}
