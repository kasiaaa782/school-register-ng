import { Component } from '@angular/core';

import { Column, Entry } from 'src/app/commons/interfaces';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export default class TableComponent {
	columns: Column[] = [
		{
			label: 'LP.',
		},
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

	entriesList: Entry[] = [
		{
			uuid: '228ad9ac-5228-11ec-bf63-0242ac130002',
			lp: '1',
			firstName: 'Małgorzata',
			lastName: 'Stańczyk',
			class: '6a',
			grade: '5',
		},
	];
}
