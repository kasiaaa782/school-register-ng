import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ApiService } from 'src/app/shared/api.service';
import { EntryModel } from 'src/app/shared/entry.model';

@Component({
	selector: 'app-add-entry-form',
	templateUrl: './add-entry-form.component.html',
	styleUrls: ['./add-entry-form.component.scss'],
})
export class AddEntryFormComponent implements OnInit {
	formValue!: FormGroup;

	entryModelObj: EntryModel = new EntryModel();

	constructor(private formBuilder: FormBuilder, private api: ApiService) {}

	ngOnInit(): void {
		this.formValue = this.formBuilder.group({
			firstName: [''],
			lastName: [''],
			class: [''],
			grade: [''],
		});
	}

	postEntryDetails(): void {
		this.entryModelObj.firstName = this.formValue.value.firstName;
		this.entryModelObj.lastName = this.formValue.value.lastName;
		this.entryModelObj.class = this.formValue.value.class;
		this.entryModelObj.grade = this.formValue.value.grade;

		this.api.postEntry(this.entryModelObj).subscribe(
			(res) => {
				console.log(res);
				alert('Wpis utworzony pomyślnie :)');
				let ref = document.getElementById('cancel');
				ref?.click();
				this.formValue.reset();
			},
			(err) => {
				alert('Coś poszło nie tak :(');
			}
		);
	}
}
