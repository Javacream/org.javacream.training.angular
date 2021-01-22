import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ContentComponent } from './people/components/content/content.component';
import { PeoplelistComponent } from './people/components/peoplelist/peoplelist.component';
import { PersonComponent } from './people/components/person/person.component';
import { ClockComponent } from './people/components/clock/clock.component';
import { FormsModule } from '@angular/forms';
import { PersoninputComponent } from './people/components/personinput/personinput.component';
import { PersonsearchComponent } from './people/components/personsearch/personsearch.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './people/components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes = [
  {path: "home", component: HomeComponent},
  {path: "people", component: ContentComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PeoplelistComponent,
    PersonComponent,
    ClockComponent,
    PersoninputComponent,
    PersonsearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
