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
import { ActionService } from '../actions/action.service';

@Component({
    selector: 'app-navigationframe',
    templateUrl: './navigationframe.component.html',
    styleUrls: [ './navigationframe.component.css' ]
})
export class NavigationFrameComponent implements OnInit {
    // currentuser: User;
    loggedin = this.actionService.subscribeTo('is_logged_in');
    currentuser = this.actionService.subscribeTo('user');

  constructor(
    public actionService: ActionService,
    private router: Router,
    ) {}

  ngOnInit(): void {
  }

  logout(): void {
    console.log('logging out');
    this.actionService.logoutUser();
    this.router.navigate(['/login']);
  }

}
