import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ContentComponent } from './people/components/content/content.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { PersonComponent } from './people/components/person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleSearchComponent } from './people/components/people-search/people-search.component';
import { PeopleInputComponent } from './people/components/people-input/people-input.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { PeopleDeleteComponent } from './people/components/people-delete/people-delete.component';
import {HttpClientModule} from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router';
const routes:Routes = [
  {path: "list", component:PeopleListComponent}, 
  {path: "input", component:PeopleInputComponent},
  {path: "search", component:PeopleSearchComponent},
  {path: "delete", component:PeopleDeleteComponent},


]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PeopleListComponent,
    PersonComponent,
    PeopleSearchComponent,
    PeopleInputComponent,
    ClockComponent,
    PeopleDeleteComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
