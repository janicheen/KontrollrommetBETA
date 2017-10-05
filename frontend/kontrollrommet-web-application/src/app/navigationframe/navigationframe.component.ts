// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
// Models
import { User } from '../_models/index';
// External Services
import { AuthService } from '../authentication/auth.service';
import { DataService } from '../_services/data.service';
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
    public authService: AuthService,
    public dataService: DataService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.dataService.currentuser.subscribe(
      (data: User) => {
        this.currentuser = data;
        console.log('currentuser set in component', this.currentuser);
      }
    );
  }

  logout(): void {
    alert('You are logging out');
    this.authService.logoutUser();
    this.router.navigate(['/login']);
  }

  /* ngOnInit(): void {
    this.userDataService.getCurrentUser()
    .subscribe(user => this.currentuser = user);
  } */
}
