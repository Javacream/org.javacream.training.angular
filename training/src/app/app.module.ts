import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/component/header/header.component';
import { ContentComponent } from './people/component/content/content.component';
import { FooterComponent } from './people/component/footer/footer.component';
import { ClockComponent } from './util/clock/clock.component';
import { PeopleListComponent } from './people/component/people-list/people-list.component';
import { PersonComponent } from './people/component/person/person.component';
import { PersonInputComponent } from './people/component/person-input/person-input.component';
import { FormsModule } from '@angular/forms';
import { PersonSearchComponent } from './people/component/person-search/person-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent,
    PeopleListComponent,
    PersonComponent,
    PersonInputComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
