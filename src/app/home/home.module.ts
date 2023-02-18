import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { ClientsComponent } from './clients/clients.component';

@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
