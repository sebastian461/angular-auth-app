import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [CommonModule, DashboradRoutingModule],
})
export class DashboardModule {}
