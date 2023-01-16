import { DashboardComponent } from './dashboard/dashboard.component';
import { ElementTableComponent } from './element-table/element-table.component'; 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'dashboard' },
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'table',
    component: ElementTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
