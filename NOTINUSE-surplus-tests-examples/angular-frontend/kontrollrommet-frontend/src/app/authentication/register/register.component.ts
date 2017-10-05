// Angular Dependencies
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// Services
import { AuthService } from '../index';
// Models
import { User } from '../../_models/index';

/* // External Services
import { AlertService } from '../../main-ui/index';

// Internal Services
import { UserService } from '../index';

 */

 @Component({
    selector: 'app-register',
    templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
    user = new User;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    onRegister(form: NgForm) {
        this.user.first_name = form.value.firstname;
        this.user.last_name = form.value.lastname;
        this.user.email = form.value.email;
        this.user.password = form.value.password;
        this.authService.registerUser(this.user);
      }
}
