import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// The Main Routing Module
import { AppRoutingModule }     from './router';

// The Root Component
import { AppComponent }         from './app.component';

// Application Components
//users
import { UsersComponent } from './users/index';

//login
import { LoginComponent } from './login/index';

//register
import { RegisterComponent } from './register/index';

//meetings
import { 
  MeetingDetailComponent,
  MeetingsComponent,
  MeetingSearchComponent
 }  from './meetings/index';

//dashboard
import { 
  DashboardComponent
 }   from './dashboard/index';

// Services
import { 
  AuthenticationService, 
  UserService,
  MeetingService,
  AlertService
 } from './_services/index';


@NgModule({ 
  imports: [ // Necessary Modules
    BrowserModule,
    FormsModule,
    HttpModule,
//The Main Routing module
    AppRoutingModule
  ],
  declarations: [ // Components and Directives
//The Root Component
    AppComponent,
//Application components
    UsersComponent,
    LoginComponent,
    RegisterComponent,
    MeetingsComponent,
    MeetingDetailComponent,
    MeetingSearchComponent,
    DashboardComponent
  ],
  providers: [ // Services
    // Application services
    MeetingService,
    //Login services
    AuthenticationService,
    UserService,
    AlertService
   ],
  bootstrap: [ AppComponent ] //root component
})
export class AppModule { }
