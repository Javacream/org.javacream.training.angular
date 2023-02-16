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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PeopleListComponent,
    PersonComponent,
    PersonInputComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
