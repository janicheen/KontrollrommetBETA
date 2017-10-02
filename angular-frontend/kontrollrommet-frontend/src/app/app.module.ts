// *** This is the main module, connecting all other sub modules ***

// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Bootstrap Module
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// Routing Module ***
import { AppRoutingModule } from './app-routing.module';
// Application Components
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/index';
import { RegisterComponent } from './authentication/index';
import { NavigationFrameComponent } from './navigationframe/navigationframe.component';
// Services
import { AuthService } from './authentication/auth.service';


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
/*     LoginComponent,
    RegisterComponent,
    NavigationFrameComponent */
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    // AuthenticationModule,
    // MainUIModule,
    // MeetingsModule
  ],
  providers: [
    AuthService
    // UserDataService,
    // CategoriesService,
    // { provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
