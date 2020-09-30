import { Component, OnInit } from '@angular/core';
import { whiteboard } from 'src/app/whiteboard';
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
    whiteboard.searchResult.subscribe((book) => this.book = book)
  }

  search(){
    this.booksService.findBookByIsbn(this.isbn)
  }

}
