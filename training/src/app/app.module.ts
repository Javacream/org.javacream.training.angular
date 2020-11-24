import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/component/header/header.component';
import { ContentComponent } from './people/component/content/content.component';
import { FooterComponent } from './people/component/footer/footer.component';
import { ClockComponent } from './util/clock/clock.component';
import { PeopleListComponent } from './people/component/people-list/people-list.component';
import { PersonComponent } from './people/component/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent,
    PeopleListComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
