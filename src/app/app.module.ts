import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MzdTimelineModule } from 'ngx-mzd-timeline';

import { AppComponent } from './app.component';
import { TitleCasePipe } from './title-case.pipe';
import { LaunchTimelineComponent } from './launch-timeline/launch-timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TitleCasePipe,
    LaunchTimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MzdTimelineModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
