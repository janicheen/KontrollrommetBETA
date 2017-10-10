import { Plan } from './plan';
import { Meeting } from './meeting';

export class MeetingSubject {
    id: number;
    plan: Plan;
    meeting: Meeting;
    request_headline: string;
    request_description: string;
    listposition_on_request?: any;
    report_headline: string;
    report_description: string;
    listposition_on_report?: any;
    report_text: string;
    // POST related fields
    plan_id: number;
    meeting_id: number;
}
