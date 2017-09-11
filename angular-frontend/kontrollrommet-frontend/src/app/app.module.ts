// *** This is the main module, connecting all other sub modules ***

// Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Routing Module ***
import { AppRoutingModule } from './router.module';
// Application Modules
import { AuthenticationModule } from './authentication/authentication.module'
import { MainUIModule } from './main-ui/main-ui.module'
import { MeetingsModule } from './meetings/meetings.module';

// Services
import { UserDataService } from './initialization/_services/user-data.service'
import { CategoriesService } from './initialization/_services/categories.service';

// The Root Component
import { AppComponent } from './app.component';

@NgModule({
  imports: [ // Necessary Modules
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    MainUIModule,
    MeetingsModule
  ],
  providers: [
    UserDataService,
    CategoriesService],
  declarations: [ AppComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
