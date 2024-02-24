import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BottomNavbarComponent } from './shared/navbars/bottom-navbar/bottom-navbar.component';
import { TopNavbarComponent } from './shared/navbars/top-navbar/top-navbar.component';
import { LogoComponent } from './shared/components/logo/logo.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgModule,
    DashboardComponent,
    BottomNavbarComponent,
    TopNavbarComponent,
    LogoComponent,
  ]
})
export class AppModule { }
