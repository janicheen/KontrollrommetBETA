// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// Component collective Services
import { AuthService } from '../../authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    // Component properties
    returnUrl: string;
    username: string;
    password: string;

    constructor(
        private authService: AuthService,
        private activatedroute: ActivatedRoute,
    ) { }

    ngOnInit() {
        console.log('store returnurl in component');
        this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'] || '/';
    }

    //  Input reactions worth passing to Component Collective Service
    onLogin(form: NgForm) {
        console.log('passing login data on to auth service');
        this.authService.loginUser(this.username, this.password, this.returnUrl);
    }
}
