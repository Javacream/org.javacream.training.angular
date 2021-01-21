import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ContentComponent } from './people/components/content/content.component';
import { PeoplelistComponent } from './people/components/peoplelist/peoplelist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    PeoplelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
