import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { StoreComponent } from './store/store/store.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'coffee', component: CoffeeComponent },
  { path: 'store', component: StoreComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
