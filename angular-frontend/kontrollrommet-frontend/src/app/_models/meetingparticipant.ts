export class MeetingParticipant {
    id: number;
    // Meeting data
    meeting_id: number;
    // Person data
    person_id: number;
    person_first_name: string;
    person_last_name: string;
    // Participant data
    is_invited: boolean;
    is_attending: boolean;
    is_leading: boolean;
    is_reporting: boolean;
    sent_meetingrequest: Date;
    accepted_invite: Date;

}