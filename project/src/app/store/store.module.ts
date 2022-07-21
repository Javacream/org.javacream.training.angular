import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreQueryComponent } from './store-query/store-query.component';
import { StoreUpdateComponent } from './store-update/store-update.component';
import { StoreComponent } from './store/store.component';


@NgModule({
  declarations: [
    StoreQueryComponent,
    StoreUpdateComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ], 
  exports: [StoreComponent]
})
export class StoreModule { }
