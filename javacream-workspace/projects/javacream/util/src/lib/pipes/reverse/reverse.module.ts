import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './reverse.pipe';



@NgModule({
  declarations: [ReversePipe],
  imports: [
    CommonModule
  ],
  exports: [ReversePipe]
})
export class ReverseModule { }
