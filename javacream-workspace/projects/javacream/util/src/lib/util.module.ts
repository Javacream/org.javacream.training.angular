import { NgModule } from '@angular/core';
import { ClockComponent } from './clock/clock.component';
import {CommonModule} from '@angular/common'


@NgModule({
  declarations: [ClockComponent],
  imports: [CommonModule
  ],
  providers: []
  , 
  exports: [ClockComponent]
})
export class UtilModule { }
