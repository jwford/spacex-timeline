import { Component } from '@angular/core';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public faCheck = faCheck;
  public title = 'SpaceX Launch Timeline';
}
