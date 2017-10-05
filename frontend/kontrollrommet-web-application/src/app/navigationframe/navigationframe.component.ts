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
import { AuthService } from '../_services/auth.service';
import { AppStore } from '../app-store';
// import { AlertService } from '../../main-ui/_services/alert.service';
// import { UserDataService } from '../../initialization/_services/user-data.service'

@Component({
    selector: 'app-navigationframe',
    templateUrl: './navigationframe.component.html',
    styleUrls: [ './navigationframe.component.css' ]
})
export class NavigationFrameComponent implements OnInit {
    currentuser: User;
    loggedin: Boolean;

  constructor(
    private store: AppStore,
    public authService: AuthService,
    private router: Router,
    ) {
      this.store
      .changes
      .pluck('user')
      .subscribe((user: User) => this.currentuser = user);
    }

  ngOnInit(): void {}

  logout(): void {
    console.log('logging out');
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }

}
