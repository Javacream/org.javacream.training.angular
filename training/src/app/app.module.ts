import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { ProfileComponent } from './people/components/profile/profile.component';
import { PersonComponent } from './people/components/person/person.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonCreateComponent } from './people/components/person-create/person-create.component';
import { PersonCreateReactiveComponent } from './people/components/person-create-reactive/person-create-reactive.component';
import { PersonSearchComponent } from './people/components/person-search/person-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    PeopleListComponent,
    ProfileComponent,
    PersonComponent,
    ClockComponent,
    PersonCreateComponent,
    PersonCreateReactiveComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
