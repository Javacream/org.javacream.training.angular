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
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './people/components/home/home.component';
import { InfoComponent } from './people/components/info/info.component';

const routes:Routes = [
  {path: "home", component: HomeComponent},
  {path: "people", component: ContentComponent},
  {path: "info", component: InfoComponent},

]
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
    PersonCreateComponent,
    HomeComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
