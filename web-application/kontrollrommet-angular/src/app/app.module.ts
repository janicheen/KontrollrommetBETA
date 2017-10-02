// *** This is the main module, connecting all other sub modules ***

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Angular JWT
import { NgJwtModule } from 'ng-jwt';
// Bootstrap Module
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Routing Module ***
import { AppRoutingModule } from './app-routing.module';
// Application Components
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NavigationFrameComponent } from './navigationframe/navigationframe.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// Services
import { AuthenticationService} from 'ng-jwt';
import { Auth } from 'ng-jwt';
import { AuthService } from './authentication/auth.service';
import { CurrentUserService } from './_services/current_user.service';
import { DataService } from './_services/data.service';



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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgJwtModule.forRoot({
      loginEndPoint: 'http://127.0.0.1:8000/api-token-auth/',
      headerPrefix: 'JWT',
      loginTokenName: 'token'
    }),
    AppRoutingModule,
   // NgbModule.forRoot(),
    // AuthenticationModule,
    // MainUIModule,
    // MeetingsModule
  ],
  providers: [
    // JWT module
    AuthenticationService, Auth,
    // Authentication
    AuthService,
    // Data
    DataService,
    // Client views
    CurrentUserService,
    // UserDataService,
    // CategoriesService,
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
