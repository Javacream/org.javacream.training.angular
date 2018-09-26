import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import {PeopleModelService} from './people-model.service';
import { PersonDetailComponent } from './person-detail/person-detail.component'
@NgModule({
  declarations: [
    AppComponent,
    SamplePersonComponent,
    PeopleListComponent,
    PersonInputComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [PeopleModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
