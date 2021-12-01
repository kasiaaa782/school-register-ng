import { Component } from '@angular/core';

import { EntryModel } from 'src/app/shared/entry.model';
import { Column } from 'src/app/shared/interfaces';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	columns: Column[] = [
		{
			label: 'Imię ucznia',
		},
		{
			label: 'Nazwisko ucznia',
		},
		{
			label: 'Klasa',
		},
		{
			label: 'Ocena',
		},
		{
			label: 'Opcje',
		},
	];

	entriesList: EntryModel[] = [
		{
			id: 1,
			firstName: 'Małgorzata',
			lastName: 'Stańczyk',
			class: '6a',
			grade: '5',
		},
	];
}
