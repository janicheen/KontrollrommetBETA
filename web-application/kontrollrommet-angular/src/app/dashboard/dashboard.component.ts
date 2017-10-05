// Angular dependencies
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

// Models
import { Meeting, User } from '../_models/index';
// External Services
import { DataService } from '../_services/data.service';
// Components

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
  currentuser: User;
  loggedin: Boolean;
  meetings: Meeting[] = [];

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit(): void {}

}
