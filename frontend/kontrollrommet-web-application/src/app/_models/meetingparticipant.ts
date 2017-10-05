import { Person, Meeting } from './index';

export class MeetingParticipant {
    id: number;
    // relational data
    person: Person;
    meeting: Meeting;
    // MeetingParticipant data
    is_invited: boolean;
    is_attending: boolean;
    is_leading: boolean;
    is_reporting: boolean;
    sent_meetingrequest: Date;
    accepted_invite: Date;

}
