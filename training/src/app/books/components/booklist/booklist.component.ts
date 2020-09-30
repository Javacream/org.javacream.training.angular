import { Component, OnInit, Input } from '@angular/core';
import { whiteboard } from 'src/app/whiteboard';
import { Book } from '../../model/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  books: Array<Book>
  constructor(readonly booksService:BooksService) {}

  ngOnInit() {
    whiteboard.bookList.subscribe((books:Array<Book>) => {
      this.books = books
    })
    this.booksService.findAllBooks()
}


   handleBookCreation(isbn:string){
    this.booksService.findAllBooks()
  }
}
