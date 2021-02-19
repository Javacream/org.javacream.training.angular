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
import { LogComponent } from './util/components/log/log.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailComponent } from './people/components/profile-detail/profile-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
const routes:Routes = [
  {path:"list", component:PeopleListComponent},
  {path:"create", component:PersonCreateComponent},
  {path:"create-reactive", component:PersonCreateReactiveComponent},
  {path:"search", component:PersonSearchComponent},
  {path:"profile-detail", component:ProfileDetailComponent},
]

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
    PersonSearchComponent,
    LogComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
