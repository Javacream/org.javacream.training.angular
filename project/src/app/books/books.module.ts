import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { BooksComponent } from './books.component';
import { HeaderComponent } from './books/components/header/header.component';
import { BookContentComponent } from './books/components/book-content/book-content.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { BookComponent } from './books/components/book/book.component';
import { BooklistComponent } from './books/components/booklist/booklist.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { BookInputReactiveComponent } from './books/components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './books/components/book-search/book-search.component';
import {BookRoutingModule} from './books/book-routing.module';
import { LogComponent } from './books/components/log/log.component';
import { ProfileComponent } from './util/components/profile/profile.component';
import { BookDeleteComponent } from './books/components/book-delete/book-delete.component';
import { InfoComponent } from './info/info.component'
@NgModule({
  declarations: [
    BooksComponent,
    HeaderComponent,
    BookContentComponent,
    FooterComponent,
    BookComponent,
    BooklistComponent,
    ClockComponent,
    BookInputReactiveComponent,
    BookSearchComponent,
    LogComponent,
    ProfileComponent,
    BookDeleteComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, BookRoutingModule
  ],
  providers: [],
  exports: [BooksComponent]
})
export class BooksModule { } 