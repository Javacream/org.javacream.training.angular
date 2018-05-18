import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { SimplePersonInputComponent } from './simple-person-input/simple-person-input.component';
import { SimplePersonListComponent } from './simple-person-list/simple-person-list.component';
import { PeopleManager } from './people-model.service';
import { SimplePersonDetailComponent } from './simple-person-detail/simple-person-detail.component';
import { PersonFromServerComponent } from './person-from-server/person-from-server.component';

const routes:Routes =
  [
    { path: 'sample', component: SamplePersonComponent },
    { path: 'input', component: SimplePersonInputComponent },
    { path: 'list', component: SimplePersonListComponent },
    { path: 'load', component: PersonFromServerComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    SamplePersonComponent,
    SimplePersonInputComponent,
    SimplePersonListComponent,
    SimplePersonDetailComponent,
    PersonFromServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
     routes), 
     HttpClientModule
  ],
  providers: [PeopleManager],
  bootstrap: [AppComponent]
})
export class AppModule { }
