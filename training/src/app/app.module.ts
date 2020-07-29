import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent} from './app.component';
import { PeopleContentComponent } from './people/component/people-content/people-content.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { PersonComponent } from './people/component/person/person.component';
import { PeopleListComponent } from './people/component/people-list/people-list.component';
import { PersonInputComponent } from './people/component/person-input/person-input.component';
import { ClockComponent } from './common/component/clock/clock.component';
import { LogComponent } from './common/component/log/log.component';
import { PersonReactiveInputComponent } from './people/component/person-reactive-input/person-reactive-input.component';
import { PersonSearchComponent } from './people/component/person-search/person-search.component';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    PeopleContentComponent,
    HeaderComponent,
    FooterComponent,
    PersonComponent,
    PeopleListComponent,
    PersonInputComponent,
    ClockComponent,
    LogComponent,
    PersonReactiveInputComponent,
    PersonSearchComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
