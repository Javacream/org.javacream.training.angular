import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BookInputReactiveComponent } from './components/book-input-reactive/book-input-reactive.component';
import { BookSearchComponent } from './components/book-search/book-search.component';
import { BookDeleteComponent } from './components/book-delete/book-delete.component';
import { BooksComponent } from '../books.component';
import { InfoComponent } from '../info/info.component';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent, 
    children: [
      { path: 'list', component: BooklistComponent },
      { path: 'input', component: BookInputReactiveComponent },
      { path: 'search', component: BookSearchComponent },
      { path: 'delete', component: BookDeleteComponent },
      { path: 'info', component: InfoComponent },
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
