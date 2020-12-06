import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Launch } from 'src/types/spacex';
import { PayloadDetailsComponent } from '../payload-details/payload-details.component';

import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

  constructor(public dialog: MatDialog) {}

  @Input() launch: Launch | null = null;

  formatLaunchDateLocal() {
    return this.launch?.launch_date_local ? moment(this.launch!.launch_date_local).format('YYYY MMMM Do') : null;
  }

  formatLaunchDateUTC() {
    return this.launch?.launch_date_utc ? moment(this.launch!.launch_date_utc).format('YYYY MMMM Do') : null;
  }

  openDialog() {
    return this.dialog.open(PayloadDetailsComponent, { data: { payloads: this.launch?.rocket.second_stage.payloads ?? null }});
  }

}
