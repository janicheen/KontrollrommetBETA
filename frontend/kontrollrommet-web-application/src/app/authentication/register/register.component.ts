﻿import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// Models
import { User } from '../../_models/index';
// Services
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user = new User;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

  ngOnInit() {
  }

    onRegister(form: NgForm) {
      this.user.first_name = form.value.firstname;
      this.user.last_name = form.value.lastname;
      this.user.username = form.value.username;
      this.user.email = form.value.email;
      this.user.password = form.value.password;
      this.authService.registerUser(this.user);
      this.router.navigate(['/login']);
    }
}
