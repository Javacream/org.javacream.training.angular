import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SamplePersonComponent } from './sample-person/sample-person.component';
import { SimplePersonInputComponent } from './simple-person-input/simple-person-input.component';
import { SimplePersonListComponent } from './simple-person-list/simple-person-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SamplePersonComponent,
    SimplePersonInputComponent,
    SimplePersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
