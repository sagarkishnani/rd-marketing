import { BannerComponent } from './banner/banner.component';
import { ClientsComponent } from './clients/clients.component';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { CountUpModule } from 'ngx-countup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { MissionComponent } from './mission/mission.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesComponent } from './services/services.component';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { UsComponent } from './us/us.component';

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
    CountUpModule,
    SwiperModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
