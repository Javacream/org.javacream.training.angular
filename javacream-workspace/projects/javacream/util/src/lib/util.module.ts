import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import { UtilComponent } from './util.component';



@NgModule({
  declarations: [UtilComponent, ClockComponent],
  imports: [CommonModule
  ],
  exports: [UtilComponent, ClockComponent]
})
export class UtilModule { }
