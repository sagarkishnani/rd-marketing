import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProjectsComponent } from './projects/projects.component';
import { CountUpModule } from 'ngx-countup';

@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent,
    ContactComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    CountUpModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
