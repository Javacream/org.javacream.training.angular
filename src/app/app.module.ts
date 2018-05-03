import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { SimplePersonInputComponent } from './simple-person-input/simple-person-input.component';
import { SimplePersonListComponent } from './simple-person-list/simple-person-list.component';
import { PeopleManager } from './people-model.service';
import { SimplePersonDetailComponent } from './simple-person-detail/simple-person-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplePersonComponent,
    SimplePersonInputComponent,
    SimplePersonListComponent,
    SimplePersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
