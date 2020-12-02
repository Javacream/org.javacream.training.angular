import { NgModule } from '@angular/core';
import {ClockComponent} from './util/components/clock/clock.component';
import {ProfileComponent} from './util/components/profile/profile.component';



@NgModule({
  declarations: [ClockComponent, ProfileComponent],
  imports: [
  ],
  exports: [ClockComponent, ProfileComponent]
})
export class UtilModule { }
