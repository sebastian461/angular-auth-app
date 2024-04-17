import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboradLayoutComponent } from './layouts/dashborad-layout/dashborad-layout.component';


@NgModule({
  declarations: [
    DashboradLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule
  ]
})
export class DashboradModule { }
