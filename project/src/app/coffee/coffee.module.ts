import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CoffeeComponent } from './coffee.component';
import { DisplayComponent } from './components/display/display.component';
import { DisplayHeaderComponent } from './components/display/display-header/display-header.component';
import { DisplayContentComponent } from './components/display/display-content/display-content.component';
import { DisplayFooterComponent } from './components/display/display-footer/display-footer.component';
import { DisplayListComponent } from './components/display/display-list/display-list.component';
import { DisplayFooterActionsComponent } from './components/display/display-footer/display-footer-actions/display-footer-actions.component';
import { DatetimeComponent } from './widgets/datetime/datetime.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { AccountViewComponent } from './views/account-view/account-view.component';
import { HistoryViewComponent } from './views/history-view/history-view.component';
import { LevelViewComponent } from './views/level-view/level-view.component';

@NgModule({
  declarations: [
    CoffeeComponent,
    DisplayComponent,
    DisplayHeaderComponent,
    DisplayContentComponent,
    DisplayFooterComponent,
    DisplayListComponent,
    DisplayFooterActionsComponent,
    DatetimeComponent,
    MainViewComponent,
    AccountViewComponent,
    HistoryViewComponent,
    LevelViewComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  exports: [CoffeeComponent]
})
export class CoffeeModule {}
