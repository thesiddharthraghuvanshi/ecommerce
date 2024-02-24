import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedKeysPipe } from './orderedKeys.pipe';



@NgModule({
  declarations: [ OrderedKeysPipe],
  imports: [
    CommonModule
  ],
  exports: [
    OrderedKeysPipe
  ]
})
export class CustomPipesModule { }
