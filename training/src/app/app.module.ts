import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './books/components/header/header.component';
import { BookContentComponent } from './books/components/book-content/book-content.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { BookComponent } from './books/components/book/book.component';
import { BooklistComponent } from './books/components/booklist/booklist.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { BookInputComponent } from './books/components/book-input/book-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookContentComponent,
    FooterComponent,
    BookComponent,
    BooklistComponent,
    ClockComponent,
    BookInputComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
