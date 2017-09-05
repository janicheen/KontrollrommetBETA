//***Angular modules***
import { CommonModule } from '@angular/common';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
// Routing Module
import { AppRoutingModule } from '../router.module';

// Angular Dependencies
import { Http, RequestOptions } from '@angular/http';

// ***Application Elements ***
// Component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';

// Services
// Angular 2 JSON Web Token provider
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthenticationService, UserService } from './index';

// Guards
import { AuthGuard } from './index';


// Set up factory configuration for AuthHttp, 
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'JWT',
    tokenGetter: (() => localStorage.getItem('UserToken'))
    }), http, options);
}

@NgModule({
  imports: [
  // Angular dependent modules
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule   
  ],
  declarations: [ // Components and Directives
    UsersComponent,
    LoginComponent,
    RegisterComponent,
  ],    
  providers: [ // Services
      //Login services
      AuthenticationService,
      UserService,
      AuthGuard,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthenticationModule {}
