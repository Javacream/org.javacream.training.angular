import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/header/header.component';
import { FooterComponent } from './people/footer/footer.component';
import { ContentComponent } from './people/content/content.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonComponent } from './people/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
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
