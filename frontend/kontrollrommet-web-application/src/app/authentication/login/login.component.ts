import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// Services
import { AuthService } from '../../authentication/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    returnUrl: string;
    username: string;
    password: string;

    constructor(
        private authService: AuthService,
        private activatedroute: ActivatedRoute,
    ) { }

    ngOnInit() {
        console.log('get returnurl from route parameter returnUrl or default to /');
        this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'] || '/';
    }

    // Pass component data to designated component collective service
    onLogin(form: NgForm) {
        console.log('passing login data on to auth service');
        this.authService.loginUser(this.username, this.password, this.returnUrl);
    }
}
