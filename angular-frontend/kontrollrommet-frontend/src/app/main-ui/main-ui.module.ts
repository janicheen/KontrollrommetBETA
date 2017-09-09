// Angular modules
import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';
// Routing Module
import { AppRoutingModule } from '../router.module';
import { MeetingsModule } from '../meetings/meetings.module'

// Components
import { DashboardComponent } from './dashboard/dashboard.component'  
import { NavigationFrameComponent }  from './navigationframe/navigationframe.component';

// Services
import { AlertService } from './_services/alert.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AppRoutingModule,
    MeetingsModule,
  ],
  declarations: [
    NavigationFrameComponent,
    DashboardComponent
  ],
  providers: [ 
    AlertService
  ],
  exports: [
     NavigationFrameComponent
  ] 
})
export class MainUIModule { }
