import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application components
import { DashboardComponent } from './dashboard/index';

import { MeetingsComponent, MeetingDetailComponent } from './meetings/index';

// Login components
import { UsersComponent } from './users/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

// Form components
import { MeetingFormComponent } from './_forms/index';

// Here is the lising of all URL routes
const routes: Routes = [
  //From root site adress, redirect to here 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Paths to applications, protected from unauthorized access by AuthGuard
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'meetings', component: MeetingsComponent, canActivate: [AuthGuard]},
  { path: 'meetings/:id', component: MeetingDetailComponent },
  { path: 'users', component: UsersComponent },
  // Authorizations
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Forms
  { path: 'meetingform', component: MeetingFormComponent },
  // When no other urls match, redirect here
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ 
    RouterModule
  ]
})

export class AppRoutingModule {}
