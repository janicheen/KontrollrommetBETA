import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
//

// Main Component
import { AppComponent }         from './app.component';
// Routing Module
import { AppRoutingModule }     from './app-routing.module';

// Application components
import { DashboardComponent }   from './dashboard.component';
import { MeetingDetailComponent }  from './meeting-detail.component';
import { MeetingsComponent }      from './meetings.component';
import { MeetingSearchComponent } from './meeting-search.component';
import { MeetingService }          from './meeting.service';

// Login components
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { UsersComponent } from './users/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

// Stuff for making JWT work
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth} from 'angular2-jwt';

// Authorization module
//import { AuthModule } from './auth.module';


@NgModule({
  imports: [ // module dependencies
    BrowserModule,
    FormsModule,
    HttpModule,
    // Routing module
    AppRoutingModule
    // Added passthru to memoryapi to partially start testing api's from outside
//    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}),
    // Autorhorization
//    AuthModule
  ],
  declarations: [ // components and directives
    AppComponent,
    DashboardComponent,
    MeetingDetailComponent,
    MeetingsComponent,
    MeetingSearchComponent,
    // Login components
    AlertComponent,
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [ // services
    // Application services
    MeetingService,
    //Login services
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    // Auth services
    AuthHttp,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'JWT',  
//      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('currentUser')),
//      globalHeaders: [{ 'Content-Type': 'application/json', 'Accept': 'application/json' }],
      noJwtError: false
    })

   ],
  bootstrap: [ AppComponent ] //root component
})
export class AppModule { }
