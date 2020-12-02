import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './books/components/header/header.component';
import { BookContentComponent } from './books/components/book-content/book-content.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { BookComponent } from './books/components/book/book.component';
import { BooklistComponent } from './books/components/booklist/booklist.component';
import { BookInputReactiveComponent } from './books/components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './books/components/book-search/book-search.component';
import {BookRoutingModule} from './books/book-routing.module';
import { LogComponent } from './books/components/log/log.component';
import { BookDeleteComponent } from './books/components/book-delete/book-delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {UtilModule} from '@javacream/util'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookContentComponent,
    FooterComponent,
    BookComponent,
    BooklistComponent,
    BookInputReactiveComponent,
    BookSearchComponent,
    LogComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule, BookRoutingModule, BrowserAnimationsModule, MatButtonModule, MatCardModule, UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
