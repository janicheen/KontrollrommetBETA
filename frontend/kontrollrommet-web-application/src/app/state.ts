// Models
import { User } from './_models/index';
import { PersonToEntityRelation } from './_models/index';
import { MeetingParticipant } from './_models/index';
// Categories
import { MeetingCategory } from './_categories/index';

export class State {
    is_loading = false;
    is_logged_in = false;
    // Model data
    currentuser: User;
    meetingparticipations: MeetingParticipant[];
    entityrelations: PersonToEntityRelation[];
    // Categories
    meeting_categories: MeetingCategory[];
}
