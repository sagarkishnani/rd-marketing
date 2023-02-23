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
import { BannerComponent } from './banner/banner.component';
import { UsComponent } from './us/us.component';
import { ServicesComponent } from './services/services.component';
import { MissionComponent } from './mission/mission.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent,
    ContactComponent,
    ProjectsComponent,
    BannerComponent,
    UsComponent,
    ServicesComponent,
    MissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    MaterialModule,
    CountUpModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
