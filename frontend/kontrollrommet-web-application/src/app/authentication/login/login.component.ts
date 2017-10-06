import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { AuthService } from '../../_services/auth.service';
import { DataService } from '../../_services/data.service';


/* import { Router, ActivatedRoute } from '@angular/router';
// Services
import { AuthenticationService, UserService } from '../index';
import { AlertService } from '../../main-ui/index';
// Models
import { User } from '../../_models/index';
 */

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private dataService: DataService,
        private activatedroute: ActivatedRoute,
    ) { }

    ngOnInit() {
        // get returnurl from route parameter 'returnUrl' or default to '/'
         this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'] || '/';
    }

    // Collect form data, pass it on to designated component collective service
    onLogin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;

        console.log('passing login data on to auth service');
        this.authService.loginUser(username, password, this.returnUrl);
    }
}
