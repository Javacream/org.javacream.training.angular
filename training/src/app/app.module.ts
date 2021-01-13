import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ContentComponent } from './people/components/content/content.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { PersonComponent } from './people/components/person/person.component';
import { FormsModule } from '@angular/forms';
import { PersonSearchComponent } from './people/components/person-search/person-search.component';
import { PersonCreateComponent } from './people/components/person-create/person-create.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ClockComponent,
    PeopleListComponent,
    PersonComponent,
    PersonSearchComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
