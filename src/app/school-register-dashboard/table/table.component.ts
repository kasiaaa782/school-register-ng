import { Component, Input, ViewChild } from '@angular/core';

import { ApiService } from 'src/app/shared/services/api.service';
import { EntryModel } from 'src/app/shared/models/entry.model';
import { Label } from 'src/app/shared/interfaces/interfaces';
import { AddEntryModalComponent } from '../add-entry-modal/add-entry-modal.component';
import { columns } from 'src/app/shared/data/columns.data';

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

	columns: Label[] = columns;

	entriesList!: EntryModel[];

	updateEntriesList = {
		onClick: (): void => this.getAllEntries(),
	};

	constructor(private api: ApiService) {}

	ngOnInit(): void {
		this.getAllEntriesFromFile();
		// this.getAllEntries();
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
