import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/Rx';
import { User } from '../_models/user';
import { CurrentUserService } from './current_user.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {
  private _currentuser: BehaviorSubject<User> = new BehaviorSubject<User>(new User);
  public readonly currentuser: Observable<User> = this._currentuser.asObservable();

  constructor(
    private currentuserService: CurrentUserService
  ) {
     this.loadInitialData();
   }


  loadInitialData() {
    this.currentuserService.getCurrentUser()
    .subscribe(
      res => {
        console.log(res);
        this._currentuser.next(res);
      },
      err => console.log('Error retrieving Todos')
    );
  }

}

