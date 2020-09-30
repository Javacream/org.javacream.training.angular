import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  isbn:string
  book:Book
  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }

  search(){
    this.booksService.findBookByIsbn(this.isbn, (book) => this.book = book)
  }

}
