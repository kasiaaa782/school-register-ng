import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { EntryModel } from 'src/app/shared/entry.model';
import { Column } from 'src/app/shared/interfaces';
import { AddEntryModalComponent } from '../add-entry-modal/add-entry-modal.component';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss'],
})
export class TableComponent {
	@ViewChild(AddEntryModalComponent)
	addEntryModalComponent!: AddEntryModalComponent;

	@Input() actionForChooseAddModalType: any;

	@Input() isAddModal: any;

	updateEntriesList = {
		onClick: (): void => this.getAllEntries(),
	};

	columns: Column[] = [
		{
			label: 'Lp.',
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

	entriesList!: EntryModel[];

	constructor(private api: ApiService, private httpClient: HttpClient) {}

	ngOnInit(): void {
		this.getAllEntriesFromFile();
		//this.getAllEntries();
	}

	getAllEntries() {
		this.api.getEntries().subscribe((res) => {
			this.entriesList = res;
		});
	}

	getAllEntriesFromFile() {
		this.api.getEntriesFromFile().subscribe((res) => {
			this.entriesList = res;
		});
	}

	deleteEntry(entry: EntryModel) {
		this.api.deleteEntry(entry.id).subscribe((res) => {
			alert('Usunięto pomyślnie');
			this.getAllEntries();
		});
	}

	onEdit(item: EntryModel) {
		this.actionForChooseAddModalType[1].onClick();
		this.addEntryModalComponent.onEdit(item);
	}
}
