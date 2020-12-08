import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Launch } from 'src/types/spacex';

@Injectable({
	providedIn: 'root'
})
export class SpacexService {

	private spacexURL = 'https://api.spacexdata.com/v3';

	constructor(private http: HttpClient) { }

	public getLaunches() {
		return this.http.get<Launch[]>(`${this.spacexURL}/launches`, { observe: 'body', responseType: 'json'});
	}

}
