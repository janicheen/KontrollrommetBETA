// Angular dependencies
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './authentication/index';
import { RegisterComponent } from './authentication/index';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { MeetingsComponent } from './meetings/meetings/meetings.component';
import { MeetingFormComponent } from './meetings/new-meeting/new-meeting.component';
// Guard
import { AuthGuard } from './_guards/auth.guard';


// ***Application components***
// UI_Mainframe
// import { DashboardComponent } from './main-ui/dashboard/dashboard.component';
// Authentication
// import { UsersComponent, LoginComponent,  RegisterComponent, AuthGuard } from './authentication/index';

// Path structure for all URL routes
/* const routes: Routes = [
  // From root site adress, redirect to here
  // Paths to main application urls, protected from unauthorized access by AuthGuard
//  { path: 'project_management', component: ProjectsComponent, canActivate: [AuthGuard]},
  // Forms
  { path: 'meetingform', component: MeetingFormComponent, canActivate: [AuthGuard]},
  // When no other urls match, redirect here
  { path: '**', redirectTo: 'dashboard' }
]; */

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'meeting_management', component: MeetingsComponent, canActivate: [AuthGuard]},
  { path: 'meetingform', component: MeetingFormComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
