import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LaunchRocketSecondStagePayload } from 'src/types/spacex';

interface PayloadDetailsDialogData {
  payloads: LaunchRocketSecondStagePayload[] | null;
}

@Component({
  selector: 'app-payload-details',
  templateUrl: './payload-details.component.html',
  styleUrls: ['./payload-details.component.scss']
})
export class PayloadDetailsComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: PayloadDetailsDialogData) { }

}
