import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/components/header/header.component';
import { FooterComponent } from './people/components/footer/footer.component';
import { ContentComponent } from './people/components/content/content.component';
import { ClockComponent } from './util/components/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
