import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import {PeopleModelService} from './people-model.service';
import { PersonDetailComponent } from './person-detail/person-detail.component'

const routes:Routes =
  [
    { path: 'sample', component: SamplePersonComponent },
    { path: 'input', component: PersonInputComponent },
    { path: 'list', component: PeopleListComponent },

]

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
    FormsModule,
    RouterModule.forRoot(
     routes)
  ],
  providers: [PeopleModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
