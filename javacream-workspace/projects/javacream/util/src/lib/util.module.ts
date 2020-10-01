import { NgModule } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { UtilComponent } from './util.component';



@NgModule({
  declarations: [UtilComponent, ClockComponent],
  imports: [
  ],
  exports: [UtilComponent, ClockComponent]
})
export class UtilModule { }
