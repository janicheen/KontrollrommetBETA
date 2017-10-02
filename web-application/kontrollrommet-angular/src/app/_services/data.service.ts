import { Injectable } from '@angular/core';
import { User, MeetingParticipant } from '../_models/index';
import { CurrentUserService } from './current_user.service';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
  currentuser = new Subject();
  meetingparticipations = new Subject();
/*   private _currentuser: BehaviorSubject<User> = new BehaviorSubject<User>(new User);
  public readonly currentuser: Observable<User> = this._currentuser.asObservable();
 */ /*  private _meetingparticipations: BehaviorSubject<MeetingParticipant[]> = new BehaviorSubject<MeetingParticipant[]>([]);
  public readonly meetingparticipations: Observable<MeetingParticipant[]> = this._meetingparticipations.asObservable();
 */
  constructor(
    private currentuserService: CurrentUserService
  ) {
     this.loadInitialData();
   }


  loadInitialData() {
    this.currentuserService.getCurrentUser()
    .subscribe(
      data => {
        console.log(data);
        this.currentuser.next(data);
      },
      err => console.log('Error getting current user')
    );

    this.currentuserService.getMeetingParticipantByUser()
    .subscribe(
      data => {
        console.log(data);
        this.meetingparticipations.next(data);
      },
      err => console.log('Error getting current user')
    );
  }

}

