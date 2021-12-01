import { Component, ViewChild } from '@angular/core';
import { AddEntryFormComponent } from './add-entry-form/add-entry-form.component';

@Component({
	selector: 'app-add-entry-modal',
	templateUrl: './add-entry-modal.component.html',
	styleUrls: ['./add-entry-modal.component.scss'],
})
export class AddEntryModalComponent {
	@ViewChild(AddEntryFormComponent)
	addEntryFormComponent!: AddEntryFormComponent;

	addEntry(): void {
		this.addEntryFormComponent.postEntryDetails();
	}
}
