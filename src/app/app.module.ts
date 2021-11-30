import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolRegisterDashboardComponent } from './school-register-dashboard/school-register-dashboard.component';
import { HeaderComponent } from './school-register-dashboard/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		SchoolRegisterDashboardComponent,
		HeaderComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
