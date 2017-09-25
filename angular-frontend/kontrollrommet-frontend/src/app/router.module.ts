// Angular dependencies
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// ***Application components***
// UI_Mainframe
import { DashboardComponent } from './main-ui/dashboard/dashboard.component';
// Authentication
import { UsersComponent, LoginComponent,  RegisterComponent, AuthGuard } from './authentication/index';
// Meetings
import { MeetingsComponent, MeetingFormComponent } from './meetings/index';

// Path structure for all URL routes
const routes: Routes = [
  // From root site adress, redirect to here
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // Paths to main application urls, protected from unauthorized access by AuthGuard
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'meeting_management', component: MeetingsComponent, canActivate: [AuthGuard]},
//  { path: 'project_management', component: ProjectsComponent, canActivate: [AuthGuard]},
  // Authorizations
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Forms
  { path: 'meetingform', component: MeetingFormComponent, canActivate: [AuthGuard]},
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
