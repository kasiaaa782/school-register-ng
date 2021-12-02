import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/shared/services/api.service';
import { EntryModel } from 'src/app/shared/models/entry.model';
import { Label } from 'src/app/shared/interfaces/interfaces';
import { classList } from 'src/app/shared/data/classList.data';

@Component({
	selector: 'app-add-entry-form',
	templateUrl: './add-entry-form.component.html',
	styleUrls: ['./add-entry-form.component.scss'],
})
export class AddEntryFormComponent implements OnInit {
	@Input() updateEntriesList: any;

	formValue!: FormGroup;

	entryModelObj: EntryModel = new EntryModel();

	classList: Label[] = classList;

	constructor(private formBuilder: FormBuilder, private api: ApiService) {}

	ngOnInit(): void {
		this.formValue = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			class: ['', Validators.required],
			grade: [
				'',
				[Validators.required, Validators.min(1), Validators.max(6)],
			],
		});
	}

	postEntryDetails(): void {
		this.setInputs();
		this.api.postEntry(this.entryModelObj).subscribe(
			(res) => {
				alert('Wpis utworzony pomyślnie :)');
				let ref = document.getElementById('cancel');
				ref?.click();
				this.formValue.reset();
				this.updateEntriesList.onClick();
			},
			(err) => {
				alert('Coś poszło nie tak :(');
			}
		);
	}

	setInputs(): void {
		this.entryModelObj.firstName = this.formValue.value.firstName;
		this.entryModelObj.lastName = this.formValue.value.lastName;
		this.entryModelObj.class = this.formValue.value.class;
		this.entryModelObj.grade = this.formValue.value.grade;
	}

	onEditDefaultProperties(item: EntryModel) {
		this.entryModelObj.id = item.id;
		this.formValue.controls['firstName'].setValue(item.firstName);
		this.formValue.controls['lastName'].setValue(item.lastName);
		this.formValue.controls['class'].setValue(item.class);
		this.formValue.controls['grade'].setValue(item.grade);
	}

	updateEntryDetails() {
		this.setInputs();
		this.api
			.updateEntry(this.entryModelObj, this.entryModelObj.id)
			.subscribe((res) => {
				alert('Zauktualizowano pomyślnie');
				let ref = document.getElementById('cancel');
				ref?.click();
				this.formValue.reset();
				this.updateEntriesList.onClick();
			});
	}
}
