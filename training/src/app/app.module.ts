import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/header/header.component';
import { FooterComponent } from './people/footer/footer.component';
import { ContentComponent } from './people/content/content.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonComponent } from './people/person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonInputComponent } from './people/person-input/person-input.component';
import { PersonSearchComponent } from './people/person-search/person-search.component';
import { ClockComponent } from './util/clock/clock.component';
import { LogComponent } from './util/log/log.component';
import { PeopleServerListComponent } from './people/people-server-list/people-server-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PeopleListComponent,
    PersonComponent,
    PersonInputComponent,
    PersonSearchComponent,
    ClockComponent,
    LogComponent,
    PeopleServerListComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
