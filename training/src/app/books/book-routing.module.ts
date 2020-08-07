import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookInputComponent } from './components/book-input/book-input.component';
import { BookInputReactiveComponent } from './components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './components/book-search/book-search.component';

const routes: Routes = [
  { path: 'list', component: BooklistComponent },
  { path: 'input', component: BookInputComponent },
  { path: 'input-reactive', component: BookInputReactiveComponent },
  { path: 'search', component: BookSearchComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
