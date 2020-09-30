import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookInputComponent } from './components/book-input/book-input.component';
import { BookInputReactiveComponent } from './components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { ZoneComponent } from '../demo/components/zone/zone.component';
import { DynamicComponentComponent } from '../demo/components/dynamic/dynamic-component/dynamic-component.component';

const routes: Routes = [
  { path: 'list', component: BooklistComponent },
  { path: 'input', component: BookInputComponent },
  { path: 'input-reactive', component: BookInputReactiveComponent },
  { path: 'search', component: BookSearchComponent },
  { path: 'delete', component: BookDeleteComponent },
  { path: 'demo/zone', component: ZoneComponent },
  { path: 'demo/dynamic', component: DynamicComponentComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
