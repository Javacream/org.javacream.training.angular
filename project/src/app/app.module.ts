import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CoffeeModule } from './coffee/coffee.module'
import { AppComponent } from './app.component';
import { BooksModule } from './books/books.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CoffeeModule, BooksModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
