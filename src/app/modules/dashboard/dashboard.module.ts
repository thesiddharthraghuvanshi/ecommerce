import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { ContactUsModule } from '../contact-us/contact-us.module';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsModule
  ]
})
export class DashboardModule { }
