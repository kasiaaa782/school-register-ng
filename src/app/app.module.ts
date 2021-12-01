import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolRegisterDashboardComponent } from './school-register-dashboard/school-register-dashboard.component';
import { HeaderComponent } from './school-register-dashboard/header/header.component';
import TableComponent from './school-register-dashboard/table/table.component';
import { AddEntryModalComponent } from './school-register-dashboard/add-entry-modal/add-entry-modal.component';
import { AddEntryFormComponent } from './school-register-dashboard/add-entry-modal/add-entry-form/add-entry-form.component';

@NgModule({
	declarations: [
		AppComponent,
		SchoolRegisterDashboardComponent,
		HeaderComponent,
		TableComponent,
		AddEntryModalComponent,
		AddEntryFormComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
