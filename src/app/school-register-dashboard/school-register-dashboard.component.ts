import { Component } from '@angular/core';

@Component({
	selector: 'app-school-register-dashboard',
	templateUrl: './school-register-dashboard.component.html',
	styleUrls: ['./school-register-dashboard.component.scss'],
})
export class SchoolRegisterDashboardComponent {
	isAddModal = true;

	actionForChooseAddModalType = [
		{
			onClick: (): void => this.setAddButton(),
		},
		{
			onClick: (): void => this.setUpdateButton(),
		},
	];

	setAddButton() {
		this.isAddModal = true;
	}

	setUpdateButton() {
		this.isAddModal = false;
	}
}
