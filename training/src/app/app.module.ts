import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './books/components/header/header.component';
import { BookContentComponent } from './books/components/book-content/book-content.component';
import { FooterComponent } from './books/components/footer/footer.component';
import { BookComponent } from './books/components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookContentComponent,
    FooterComponent,
    BookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
