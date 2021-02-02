import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
