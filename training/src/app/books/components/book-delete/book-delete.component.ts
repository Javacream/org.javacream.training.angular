import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  isbn:string
  book:Book
  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }

  delete(){
    this.book = this.booksService.deleteBookByIsbn(this.isbn)
  }
}
