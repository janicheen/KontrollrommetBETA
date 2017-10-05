import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// Services
import { AuthService } from '../index';


/* import { Router, ActivatedRoute } from '@angular/router';
// Services
import { AuthenticationService, UserService } from '../index';
import { AlertService } from '../../main-ui/index';
// Models
import { User } from '../../_models/index';
 */

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private activatedroute: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.activatedroute.snapshot.queryParams['returnUrl'] || '/';
    }

    onLogin(form: NgForm) {
        const username = form.value.username;
        const password = form.value.password;
        this.authService.loginUser(username, password);
/*         .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            }
        );
 */    }
}
