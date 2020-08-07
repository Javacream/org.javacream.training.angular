import { Component, OnInit } from '@angular/core';
import {sampleBook, Book} from '../../model/books' 
import { BooksService } from '../../services/books.service';


@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {
  book = sampleBook
  books:Array<Book>
  constructor(readonly booksService:BooksService) {}

  ngOnInit() {
    //this.books = await this.booksService.findAllBooksFetch()
    this.booksService.findAllBooksHttpClient(this.update)
  }

  handleButtonClick(){
    console.log("clicked!")
  }

   handleBookCreation(isbn:string){
    this.booksService.findAllBooksHttpClient(this.update)
    //this.books = await this.booksService.findAllBooksFetch()
  }

  update(books:Array<Book>) {
    this.books = books
  }
}
