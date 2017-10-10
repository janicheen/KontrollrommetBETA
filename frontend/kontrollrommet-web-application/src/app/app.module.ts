// *** This is the main module, connecting all other sub modules ***

// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe } from '@angular/common';

// Angular JWT
import { NgJwtModule } from 'ng-jwt';
// Bootstrap Module
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Dragula Module
import {DragulaModule , DragulaService} from 'ng2-dragula/ng2-dragula';
// Routing Module ***
import { AppRoutingModule } from './app-routing.module';
// App Store
import { AppStore } from './app-store';
// Application Components
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavigationFrameComponent } from './navigation/navigationframe/navigationframe.component';
import { DashboardComponent } from './navigation/dashboard/dashboard.component';
import { MeetingsComponent } from './meetings/meetings/meetings.component';
import { MeetingListComponent } from './meetings/meeting-list/meeting-list.component';
import { MeetingFormComponent } from './meetings/new-meeting/new-meeting.component';
// Services
import { AuthenticationService as jwtAuthenticationService, Auth as jwtAuth } from 'ng-jwt';
import { AuthGuard } from './_guards/auth.guard';
import { HttpService } from './_services/http.service';
import { DataService } from './_services/data.service';
import { ActionService } from './_services/action.service';
import { MeetingService } from './meetings/meeting.service';
import { NavigationService } from './navigation/navigation.service';
import { AuthService } from './authentication/authentication.service';

// *** UNSTRUCTURED ***
// import { HttpClientModule, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthenticationModule } from './authentication/authentication.module';
// import { MainUIModule } from './main-ui/main-ui.module';
// import { MeetingsModule } from './meetings/meetings.module';
// Services
// import { UserDataService } from './initialization/_services/user-data.service';
// import { CategoriesService } from './initialization/_services/categories.service';
// import { MyInterceptorService } from './_services/my-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavigationFrameComponent,
    DashboardComponent,
    MeetingsComponent,
    MeetingListComponent,
    MeetingFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgJwtModule.forRoot({
      loginEndPoint: 'http://127.0.0.1:8000/api-token-auth/',
      headerPrefix: 'JWT',
      loginTokenName: 'token'
    }),
    NgbModule.forRoot(),
    DragulaModule,
    // AuthenticationModule,
    // MainUIModule,
    // MeetingsModule
  ],
  providers: [
    // Appstore
    AppStore,
    // JWT services
    jwtAuthenticationService, jwtAuth,
    // Dragula
    DragulaService,
    DatePipe,
    // Guards
    AuthGuard,
    // Main Service units
    HttpService,
    DataService,
    ActionService,
    // Component Collective Services
    AuthService,
    NavigationService,
    MeetingService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
