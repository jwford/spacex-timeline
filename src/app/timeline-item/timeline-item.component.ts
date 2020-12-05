import { Component, Input } from '@angular/core';
import { Launch } from 'src/types/spacex';

import * as moment from 'moment';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent {

  @Input() launch: Launch | null = null;

  formatLaunchDateLocal() {
    return this.launch?.launch_date_local ? moment(this.launch!.launch_date_local).format('YYYY MMMM Do') : null;
  }

  formatLaunchDateUTC() {
    return this.launch?.launch_date_utc ? moment(this.launch!.launch_date_utc).format('YYYY MMMM Do') : null;
  }

}
