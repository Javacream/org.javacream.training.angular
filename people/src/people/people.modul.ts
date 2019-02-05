import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PeopleMainComponent} from './people.main.component';
import { SamplePersonComponent} from './sample-person/sample-person.component';
import {PersonComponent} from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
@NgModule({
  declarations: [
    PeopleMainComponent, SamplePersonComponent, PersonComponent, PeopleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [PeopleMainComponent]
})
export class PeopleModule { }
