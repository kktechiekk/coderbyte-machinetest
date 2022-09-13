import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTableModule} from '@angular/material/table';



@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCheckboxModule,
    MatTableModule
    
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }


