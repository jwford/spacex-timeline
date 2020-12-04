import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  public api = 'https://api.spacexdata.com/v3/';

  public constructor(private http: HttpClient) { }

  public getLaunches() {
    return this.http.get(`${this.api}/launches`);
  }

}
