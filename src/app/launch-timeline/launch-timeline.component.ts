import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { combineLatest, Observable, pipe } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Launch } from 'src/types/spacex';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-launch-timeline',
  templateUrl: './launch-timeline.component.html',
  styleUrls: ['./launch-timeline.component.scss']
})
export class LaunchTimelineComponent implements OnInit {

  public filter = new FormControl('');
  public filter$: Observable<string> | null = null;
  public filteredLaunches$: Observable<Launch[]> | null = null;
  public launches$: Observable<Launch[]> | null = null;

  constructor(private spacex: SpacexService) { }

  ngOnInit() {
    this.filter$ = this.filter.valueChanges.pipe(startWith(''));

    this.launches$ = this.spacex.getLaunches();

    this.filteredLaunches$ = combineLatest([this.launches$, this.filter$]).pipe(
      map(([launches, filterString]) => launches.filter(launch => launch.mission_name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1)));
  }

}
