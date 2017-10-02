import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { AuthService } from '../auth.service';


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
        private router: Router,
        private activatedroute: ActivatedRoute,
    ) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
         this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'] || '/';
    }

    onLogin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        console.log(username, password);
        this.authService.loginUser(username, password)
        .subscribe(
            data => {
                // If login returns sucessful, this operation is performed
                if (data) {
                    console.log('login sucessful');
                    this.router.navigate([this.returnUrl]);
                // It login returns unsuccessful, this operation is performed
                } else {
                    console.log('failure to log in');
                    this.router.navigate([this.returnUrl]);
                }
            },
            error => console.log(error)
        );
    }
}
