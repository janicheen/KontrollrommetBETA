import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../_services/index';

import { User } from '../_models/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userservice: UserService
    ) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("at the point where I call getcurrentuser")
                    this.userservice.getCurrentUser()
                    .then(luser => this.setuser(luser));
                    console.log("this is after i try calling setuser")
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log("running error")
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
    setuser(user) {
        localStorage.setItem('CurrentUser', user);
        console.log("here's the user object", user)
        return
    }
}
