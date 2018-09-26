import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PeopleModelService } from './people-model.service';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonFromServerComponent } from './person-from-server/person-from-server.component'

const routes: Routes =
  [
    { path: 'sample', component: SamplePersonComponent },
    { path: 'input', component: PersonInputComponent },
    { path: 'list', component: PeopleListComponent },
    { path: 'server', component: PersonFromServerComponent }
  ]

@NgModule({

  declarations: [
    AppComponent,
    SamplePersonComponent,
    PeopleListComponent,
    PersonInputComponent,
    PersonDetailComponent,
    PersonFromServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes),
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule, 
     HttpClientModule
  ],
  providers: [PeopleModelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
