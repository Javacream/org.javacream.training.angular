import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { PersonComponent } from './people/components/person/person.component';
import { FormsModule } from '@angular/forms';
import { PersonSearchComponent } from './people/components/person-search/person-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent,
    PeopleListComponent,
    PersonComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
