//***Angular modules***
import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

// ***Foreign Modules***
// Bootstrap UI 
import { SortableModule } from 'ngx-bootstrap';
import { DragulaModule } from 'ng2-dragula'

// *** Routing Module ***
import { AppRoutingModule } from '../router.module';

// *** Application Elements
//meetings
import { MeetingsComponent }  from './index';
import { MeetingFormComponent } from './index';

// Services
import { MeetingService } from './index';

@NgModule({ 
  imports: [ // Necessary Modules
  // Angular dependent modules
    CommonModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,   
  // Sortable module from Bootstrap
    SortableModule.forRoot(),
  // Dragula module from Bootstrap
    DragulaModule,
  //The Routing module
    AppRoutingModule,
  ],
  declarations: [ // Components and Directives
//Application components
    MeetingsComponent,
  // Forms
    MeetingFormComponent
  ],
  providers: [ // Services
    // Application services
    MeetingService,
  ],
  exports: [
    MeetingsComponent
  ] 
})
export class MeetingsModule { }
