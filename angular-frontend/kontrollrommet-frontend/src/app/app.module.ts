// *** This is the main module, connecting all other sub modules ***

//***Angular modules***
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// ***Foreign Modules***
// Bootstrap UI 
import { SortableModule } from 'ngx-bootstrap';
import { DragulaModule } from 'ng2-dragula'

// *** Routing Module ***
import { AppRoutingModule } from './router.module';

// ***Main Application Modules
// Authentication module
import { AuthenticationModule } from './authentication/authentication.module'
import { MeetingsModule } from "./meetings/meetings.module";

// *** WORK IN PROGRESS BEGIN ***
// Application Components
//dashboard
import {DashboardComponent}   from './dashboard/index';
// Services
import { AlertService } from './_services/index';
// *** WORK IN PROGRESS END ***

// The Root Component
import { AppComponent }         from './app.component';

@NgModule({
  imports: [ // Necessary Modules
  // Angular dependent modules
    BrowserModule,
    FormsModule,
    HttpModule,   
  // Sortable module from Bootstrap
    SortableModule.forRoot(),
  // Dragula module from Bootstrap
    DragulaModule,
  //The Routing module
    AppRoutingModule,
  // Main Application Modules
    AuthenticationModule,
    MeetingsModule,
  ],
  declarations: [ // Components and Directives
//The Root Component
    AppComponent,
//Application components
    DashboardComponent,
  ],
  providers: [ // Services
    // Application services
    AlertService,
],
  bootstrap: [ AppComponent ] //root component
})
export class AppModule { }
