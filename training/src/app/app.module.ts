import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent} from './app.component';
import { PeopleContentComponent } from './people/component/people-content/people-content.component';
import { HeaderComponent } from './common/component/header/header.component';
import { FooterComponent } from './common/component/footer/footer.component';
import { PersonComponent } from './people/component/person/person.component';
import { PeopleListComponent } from './people/component/people-list/people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleContentComponent,
    HeaderComponent,
    FooterComponent,
    PersonComponent,
    PeopleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
