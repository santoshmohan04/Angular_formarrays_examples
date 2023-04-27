import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeammanagementComponent } from './teammanagement/teammanagement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeammanagementService } from './teammanagement/teammanagement.service';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [AppComponent, TeammanagementComponent, EmployeesComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [TeammanagementService],
  bootstrap: [AppComponent],
})
export class AppModule {}
