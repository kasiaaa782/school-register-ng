import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ApiService } from 'src/app/shared/api.service';
import { EntryModel } from 'src/app/shared/entry.model';

@Component({
	selector: 'app-add-entry-form',
	templateUrl: './add-entry-form.component.html',
	styleUrls: ['./add-entry-form.component.scss'],
})
export class AddEntryFormComponent implements OnInit {
	@Input() updateEntriesList: any;

	formValue!: FormGroup;

	entryModelObj: EntryModel = new EntryModel();

	classList: string[] = ['VIa', 'VIb', 'VIc', 'VId'];

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

	setInputs(): void {
		this.entryModelObj.firstName = this.formValue.value.firstName;
		this.entryModelObj.lastName = this.formValue.value.lastName;
		this.entryModelObj.class = this.formValue.value.class;
		this.entryModelObj.grade = this.formValue.value.grade;
	}

	postEntryDetails(): void {
		this.setInputs();

		this.api.postEntry(this.entryModelObj).subscribe(
			(res) => {
				console.log(res);
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
