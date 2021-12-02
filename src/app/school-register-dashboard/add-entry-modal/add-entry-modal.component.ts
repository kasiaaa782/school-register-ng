import { Component, Input, ViewChild } from '@angular/core';

import { EntryModel } from 'src/app/shared/models/entry.model';
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

	@Input() updateEntriesList: any;

	readonly VALIDATION_INFORMATION =
		'Uzupełnij wszytskie pola i upewnij się czy ocena zawiera się w przedziale 1-6 :)';

	onEdit(item: EntryModel) {
		this.addEntryFormComponent.onEditDefaultProperties(item);
	}

	addEntry(): void {
		if (this.addEntryFormComponent.formValue.invalid) {
			alert(this.VALIDATION_INFORMATION);
		} else {
			this.addEntryFormComponent.postEntryDetails();
		}
	}

	updateEntry(): void {
		if (this.addEntryFormComponent.formValue.invalid) {
			alert(this.VALIDATION_INFORMATION);
		} else {
			this.addEntryFormComponent.updateEntryDetails();
		}
	}

	resetForm(): void {
		this.addEntryFormComponent.formValue.reset();
	}
}
