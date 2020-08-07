import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './books/components/header/header.component';
import { BookContentComponent } from './books/components/book-content/book-content.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { BookComponent } from './books/components/book/book.component';
import { BooklistComponent } from './books/components/booklist/booklist.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { BookInputComponent } from './books/components/book-input/book-input.component';
import { BookInputReactiveComponent } from './books/components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './books/components/book-search/book-search.component';
import {BookRoutingModule} from './books/book-routing.module';
import { LogComponent } from './books/components/log/log.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookContentComponent,
    FooterComponent,
    BookComponent,
    BooklistComponent,
    ClockComponent,
    BookInputComponent,
    BookInputReactiveComponent,
    BookSearchComponent,
    LogComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, BookRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
