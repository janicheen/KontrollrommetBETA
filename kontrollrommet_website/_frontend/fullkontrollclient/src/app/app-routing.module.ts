import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Application components
import { DashboardComponent }   from './dashboard.component';
import { MeetingsComponent }      from './meetings.component';
import { MeetingDetailComponent }  from './meeting-detail.component';
// Login components
import { UsersComponent } from './users/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
  //From root site adress, redirect to here 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //Paths used by applications
  { path: 'dashboard', component: DashboardComponent },
  { path: 'meetings', component: MeetingsComponent },
  { path: 'meetings/:id', component: MeetingDetailComponent },
  { path: 'users', component: UsersComponent },
  // Authorization paths
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 // { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // When no other urls match, redirect here
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
     { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
