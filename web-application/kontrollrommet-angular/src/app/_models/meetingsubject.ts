import { Subject } from './index';

export class MeetingSubject {
    id: number;
    // Subject data
    subject: Subject;
    // Meeting Subject data
    request_headline: string;
    request_description: string;
    listposition_on_request: number;
    listposition_on_report: number;
}
