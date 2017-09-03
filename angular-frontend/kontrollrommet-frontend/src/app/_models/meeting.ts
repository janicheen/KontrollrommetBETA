// Models
import { Entity, MeetingParticipant, MeetingSubject, MeetingCategory } from '../_models/index';

export class Meeting {
  id: number; 
  
  // Relational data
  meeting_category: MeetingCategory; 
  entity: Entity; 
  // Relational data Read Only
  participants: MeetingParticipant[]; 
  meeting_subjects: MeetingSubject[];
  // Date data
  requested_meetdate: number; 
  meetingrequest_sent: number; 
  meeting_started: number; 
  meeting_completed: number; 
  report_started: number; 
  report_completed: number; 
  // Boolean
  is_current_meeting: boolean; 
}
