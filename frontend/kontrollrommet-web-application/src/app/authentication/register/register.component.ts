// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Component collective Service
import { AuthService } from '../../authentication/authentication.service';
// Models
import { User } from '../../_models/index';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    // Component properties
    user = new User;

    constructor(
        private authService: AuthService,
    ) {}

    ngOnInit() {}

    // Component reactions

    onRegister(form: NgForm) {
        console.log('passing register user data on to auth service');
        this.authService.registerUser(this.user);
    }
}
