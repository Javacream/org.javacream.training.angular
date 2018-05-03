import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondAppComponent } from './second-app/second-app.component';
import { ThirdAppComponent } from './third-app/third-app.component';


@NgModule({
  declarations: [
    AppComponent,
    SecondAppComponent,
    ThirdAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, SecondAppComponent]
})
export class AppModule { }
