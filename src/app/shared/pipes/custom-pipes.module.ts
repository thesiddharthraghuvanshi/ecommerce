import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderedKeysPipe } from './orderedKeys.pipe';
import { TimeDifferencePipe } from './timeDifference.pipe';



@NgModule({
  declarations: [ OrderedKeysPipe, TimeDifferencePipe],
  imports: [
    CommonModule
  ],
  exports: [
    OrderedKeysPipe,
    TimeDifferencePipe
  ]
})
export class CustomPipesModule { }
