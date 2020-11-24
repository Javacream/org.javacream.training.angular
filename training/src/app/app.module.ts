import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './people/component/header/header.component';
import { ContentComponent } from './people/component/content/content.component';
import { FooterComponent } from './people/component/footer/footer.component';
import { ClockComponent } from './util/clock/clock.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
