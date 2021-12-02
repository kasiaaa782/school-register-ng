import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';

import { EntryModel } from 'src/app/shared/entry.model';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';

@Component({
	selector: 'app-add-entry-modal',
	templateUrl: './add-entry-modal.component.html',
	styleUrls: ['./add-entry-modal.component.scss'],
})
export class AddEntryModalComponent {
	@ViewChild(AddEntryFormComponent)
	addEntryFormComponent!: AddEntryFormComponent;

	@Input() isAddModal: any;

	onEdit(item: EntryModel) {
		this.addEntryFormComponent.onEditDefaultProperties(item);
	}

	addEntry(): void {
		if (this.addEntryFormComponent.formValue.invalid) {
			alert(
				'Uzupełnij wszytskie pola i upewnij się czy ocena zawiera się w przedziale 1-6 :)'
			);
		} else {
			this.addEntryFormComponent.postEntryDetails();
		}
	}

	updateEntry(): void {
		if (this.addEntryFormComponent.formValue.invalid) {
			alert(
				'Uzupełnij wszytskie pola i upewnij się czy ocena zawiera się w przedziale 1-6 :)'
			);
		} else {
			this.addEntryFormComponent.updateEntryDetails();
		}
	}

	resetForm(): void {
		this.addEntryFormComponent.formValue.reset();
	}
}
