import { Component, OnInit, Input } from '@angular/core';
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
    //this.books = await this.booksService.findAllBooksFetch()
    this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
      this.books = books
    })
}


   handleBookCreation(isbn:string){
    this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
        this.books = books
      })
  }

  handleDeleteBook(isbn:string){
    this.booksService.deleteBookByIsbn(isbn, () => {
      this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
        console.log(books)
        this.books = books
      })
    })
}
}
