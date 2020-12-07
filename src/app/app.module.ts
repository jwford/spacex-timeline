import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { MzdTimelineModule } from 'ngx-mzd-timeline';

import { AppComponent } from './app.component';
import { LaunchTimelineComponent } from './launch-timeline/launch-timeline.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PayloadDetailsComponent } from './payload-details/payload-details.component';
import { FilterDialogComponent } from './filter-dialog/filter-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchTimelineComponent,
    TimelineItemComponent,
    ToolbarComponent,
    PayloadDetailsComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MzdTimelineModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
