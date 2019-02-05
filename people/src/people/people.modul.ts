import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PeopleMainComponent} from './people.main.component';
import { SamplePersonComponent} from './sample-person/sample-person.component';

@NgModule({
  declarations: [
    PeopleMainComponent, SamplePersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PeopleMainComponent]
})
export class PeopleModule { }
