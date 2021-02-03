import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { ContentComponent } from './people/components/content/content.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ClockComponent } from './util/components/clock/clock.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { PersonComponent } from './people/components/person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonSearchComponent } from './people/components/person-search/person-search.component';
import { PersonCreateComponent } from './people/components/person-create/person-create.component';
import {HttpClientModule} from '@angular/common/http';
import { ActionLogComponent } from './util/components/action-log/action-log.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailComponent } from './people/components/profile-detail/profile-detail.component';

const routes:Routes = [
  {path:"list", component: PeopleListComponent}, 
  {path:"search", component: PersonSearchComponent}, 
  {path:"create", component: PersonCreateComponent}, 
  {path:"profile", component: ProfileDetailComponent}, 

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent,
    PeopleListComponent,
    PersonComponent,
    PersonSearchComponent,
    PersonCreateComponent,
    ActionLogComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
