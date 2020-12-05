import { Component, Input, OnInit } from '@angular/core';
import { Launch } from 'src/types/spacex';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss']
})
export class TimelineItemComponent implements OnInit {

  @Input() launch: Launch | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
