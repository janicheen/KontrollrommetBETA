// Angular dependencies
import { Component, OnInit } from '@angular/core';
// External Services
import { AppStore } from '../../app-store';
import { NavigationService } from '../navigation.service';

@Component({
    selector: 'app-navigationframe',
    templateUrl: './navigationframe.component.html',
    styleUrls: [ './navigationframe.component.css' ]
})
export class NavigationFrameComponent implements OnInit {
    // Async Component properties
    loggedin = this.appStore.subscribeTo('is_logged_in');
    currentuser = this.appStore.subscribeTo('currentuser');

    constructor(
        private appStore: AppStore,
        private navigationService: NavigationService,
    ) {}

    ngOnInit(): void {}

    //  Input reactions worth passing to Component Collective Service
    logoutUser(): void {
        console.log('passing logout signal to collective component service');
        this.navigationService.logoutUser();
    }
}
