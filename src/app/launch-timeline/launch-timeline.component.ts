import { Component, OnInit } from '@angular/core';
import { Launch } from 'src/types/spacex';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss']
})
export class LaunchTimelineComponent implements OnInit {

  public launches: Launch[] | null = null;

  constructor(private spacex: SpacexService) { }

  ngOnInit(): void {
    this.spacex.getLaunches()
      .subscribe(res => this.launches = res as Launch[]);
  }

}
