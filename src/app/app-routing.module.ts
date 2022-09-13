import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { MainRouterComponent } from './main-router/main-router.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {
    path: '',
    component: MainRouterComponent, // parent default route
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard', // child routes of dashboard
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path : 'inventory',
        component : InventoryComponent
      },
      {
        path : 'orders',
        component : OrdersComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
