// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
// Models
import { User } from '../_models/index';
// External Services
import { AppStore } from '../app-store';
import { ActionService } from '../actions/action.service';

@Component({
    selector: 'app-navigationframe',
    templateUrl: './navigationframe.component.html',
    styleUrls: [ './navigationframe.component.css' ]
})
export class NavigationFrameComponent implements OnInit {
    currentuser: User;
    loggedin: boolean;

  constructor(
    private store: AppStore,
    public actionService: ActionService,
    private router: Router,
    ) {
      this.store.changes.pluck('user')
      .subscribe((user: User) => this.currentuser = user);
      this.store.changes.pluck('isLoggedin')
      .subscribe((isloggedin: boolean) => this.loggedin = isloggedin);
    }

  ngOnInit(): void {}

  logout(): void {
    console.log('logging out');
    this.actionService.logoutUser();
    this.router.navigate(['/login']);
  }

}
