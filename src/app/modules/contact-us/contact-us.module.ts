import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { BrowserModule } from '@angular/platform-browser';
import { OrderedKeysPipe } from '../../shared/pipes/orderedKeys.pipe';
import { CustomPipesModule } from '../../shared/pipes/custom-pipes.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    ContactUsComponent,
    CustomPipesModule,
  ]
})
export class ContactUsModule { }
