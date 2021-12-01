import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-add-entry-form',
	templateUrl: './add-entry-form.component.html',
	styleUrls: ['./add-entry-form.component.scss'],
})
export class AddEntryFormComponent implements OnInit {
	formValue!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.formValue = this.formBuilder.group({
			lp: [''],
			firstName: [''],
			lastName: [''],
			class: [''],
			grade: [''],
		});
	}
}
