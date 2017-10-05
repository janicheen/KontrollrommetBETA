import { Injectable } from '@angular/core';
import { User, MeetingParticipant } from '../_models/index';
import { CurrentUserService } from './current_user.service';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public currentuser = new BehaviorSubject<User>(new User);
  public meetingparticipations = new BehaviorSubject<MeetingParticipant[]>([new MeetingParticipant]);
/*   private _currentuser: BehaviorSubject<User> = new BehaviorSubject<User>(new User);
  public readonly currentuser: Observable<User> = this._currentuser.asObservable();
 */ /*  private _meetingparticipations: BehaviorSubject<MeetingParticipant[]> = new BehaviorSubject<MeetingParticipant[]>([]);
  public readonly meetingparticipations: Observable<MeetingParticipant[]> = this._meetingparticipations.asObservable();
 */
  constructor(
    private currentuserService: CurrentUserService
  ) {
//     this.loadInitialData();
   }

  loadInitialData() {
    this.loadCurrentUser();
    this.loadMeetingParticipantByUser();
  }
  // Reuests current user from backend service and loads it into currentuser property.
  loadCurrentUser() {
    this.currentuserService.getCurrentUser()
    .subscribe(
      data => {
        console.log('loading current user into data service...', data);
        this.currentuser.next(data);
      },
      err => console.log('Error loading current user')
    );
  }

  loadMeetingParticipantByUser() {
    this.currentuserService.getMeetingParticipantByUser()
    .subscribe(
      data => {
        console.log('loading meeting participant by user into data service...', data);
        this.meetingparticipations.next(data);
      },
      err => console.log('Error loading current user')
    );
  }

}

