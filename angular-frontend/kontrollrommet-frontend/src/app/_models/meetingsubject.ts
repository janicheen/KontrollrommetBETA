import { Subject } from "./index";

export class MeetingSubject {
    id: number;
    // Subject data
    subject: Subject;
    // Meeting Subject data
    edited_headline: string;
    edited_description: string;
    listposition_on_request: number;
    listposition_on_report: number;
}