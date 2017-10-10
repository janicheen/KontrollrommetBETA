// Models
import { Entity, MeetingParticipant, MeetingSubject } from '../_models/index';
import { MeetingCategory } from '../_categories/index';
export class Meeting {
  id: number;
  meeting_category: MeetingCategory;
  executive_entity: Entity;
  meetingparticipants: MeetingParticipant[];
  meetingsubjects: MeetingSubject[];
  requested_meetdate: string;
  meetingrequest_created?: any;
  meetingrequest_sent?: any;
  meeting_started?: any;
  meeting_completed?: any;
  report_started?: any;
  report_completed?: any;
  is_current_meeting: boolean;
  // POST related fields
  meetingparticipants_data: MeetingParticipant[];
  meetingsubjects_data: MeetingSubject[];
}
