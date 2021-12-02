import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

import { EntryModel } from './entry.model';

@Injectable({
	providedIn: 'root',
})
export class ApiService {
	constructor(private http: HttpClient) {}

	postEntry(data: EntryModel) {
		return this.http
			.post<EntryModel>('http://localhost:3000/posts', data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	getEntries() {
		return this.http.get<EntryModel>('http://localhost:3000/posts').pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	getEntriesFromFile() {
		return this.http.get<EntryModel>('../assets/entry-data.json').pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	updateEntry(data: EntryModel, id: number) {
		return this.http
			.put<EntryModel>('http://localhost:3000/posts/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	deleteEntry(id: number) {
		return this.http
			.delete<EntryModel>('http://localhost:3000/posts/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
}
