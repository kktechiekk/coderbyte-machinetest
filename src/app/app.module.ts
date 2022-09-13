import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list'; 
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { HeaderComponent } from './header/header.component';
import { MainRouterComponent } from './main-router/main-router.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrdersComponent } from './orders/orders.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavbarComponent,
    HeaderComponent,
    MainRouterComponent,
    InventoryComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
