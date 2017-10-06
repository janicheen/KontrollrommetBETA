import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Services
import { AuthService } from '../../authentication/authentication.service';
// Models
import { User } from '../../_models/index';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user = new User;

    constructor(
        private authService: AuthService,
    ) { }

    ngOnInit() {}

    // Pass component data to designated component collective service
    onRegister(form: NgForm) {
        console.log('passing register data on to auth service');
        this.authService.registerUser(this.user);
    }
}
