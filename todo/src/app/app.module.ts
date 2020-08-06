import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './todo/components/main/main.component';
import { InputComponent } from './todo/components/input/input.component';
import { ListComponent } from './todo/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
