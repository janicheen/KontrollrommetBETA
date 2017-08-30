import { Person } from "./index";

export class MeetingParticipant {
    id: number;
    // Person data
    person: Person;
    // Participant data
    is_invited: boolean;
    is_attending: boolean;
    is_leading: boolean;
    is_reporting: boolean;
    sent_meetingrequest: Date;
    accepted_invite: Date;

}