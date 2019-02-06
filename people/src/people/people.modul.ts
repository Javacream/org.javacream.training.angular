import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PeopleMainComponent} from './people.main.component';
import { SamplePersonComponent} from './sample-person/sample-person.component';
import {PersonComponent} from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';

import {MatButtonModule} from '@angular/material';
import { PersonInputComponent } from './person-input/person-input.component';
import { FormsModule } from '@angular/forms';
import { PersonLoaderComponent } from './person-loader/person-loader.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    PeopleMainComponent, SamplePersonComponent, PersonComponent, PeopleListComponent, PersonInputComponent, PersonLoaderComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, FormsModule, HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [PeopleMainComponent]
})
export class PeopleModule { }
