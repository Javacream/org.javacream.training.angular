import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CoffeeComponent } from './coffee/coffee.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
