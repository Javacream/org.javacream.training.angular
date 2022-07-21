import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeModule } from './coffee/coffee.module'
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';
import {AppRoutingModule} from './app-routing-module'
import { StoreModule } from './store/store.module';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoffeeModule, BooksModule, StoreModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
