import { MeetingParticipant, MeetingSubject } from '../_models/index';

export class Meeting {
  id: number;  
  meeting_category: number;
  entity: number;
  requested_meetdate: number;
  participants: MeetingParticipant[];
  meeting_subjects: MeetingSubject[];
}
