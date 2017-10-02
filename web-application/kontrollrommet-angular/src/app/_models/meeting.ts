// Models
import { Entity, MeetingMeetingParticipant, MeetingSubject } from '../_models/index';
import { MeetingCategory } from '../_categories/index';
export class Meeting {
  // API PK
  id: number;
  // Relational data
  meeting_category: MeetingCategory;
  entity: Entity;
  // Relational data Read Only
  meetingparticipants: MeetingMeetingParticipant[];
  meetingsubjects: MeetingSubject[];
  // Frontend data
  requested_meetdate: number;
  meetingrequest_sent: number;
  meeting_started: number;
  meeting_completed: number;
  report_started: number;
  report_completed: number;
  // Boolean
  is_current_meeting: boolean;
}
