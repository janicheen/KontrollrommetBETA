// Angular modules
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// angular2-jwt module
import { AuthModule } from './auth.module'

// Modules from Bootstrap
import { SortableModule } from 'ngx-bootstrap';
import { DragulaModule } from 'ng2-dragula'

// The Main Routing Module
import { AppRoutingModule } from './router';

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

// Guards
import {
  AuthGuard
} from './_guards/index';

// Forms
import { MeetingFormComponent } from './_forms/index';

@NgModule({ 
  imports: [ // Necessary Modules
  // Angular modules
    BrowserModule,
    FormsModule,
    HttpModule,
  // angular2-jwt module
    AuthModule,
  // Sortable module from Bootstrap
  SortableModule.forRoot(),
  // Dragula module from Bootstrap
  DragulaModule,
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
    DashboardComponent,
// Forms
    MeetingFormComponent
  ],
  providers: [ // Services
    // Application services
    MeetingService,
    //Login services
    AuthenticationService,
    UserService,
    AlertService,
    AuthGuard,
   ],
  bootstrap: [ AppComponent ] //root component
})
export class AppModule { }
