import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from '../about/about.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsModule,
    AboutModule
  ]
})
export class DashboardModule { }
