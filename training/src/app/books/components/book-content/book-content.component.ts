import { Component, OnInit } from '@angular/core';
import {sampleBook, BooksController, Book} from '../../model/books' 


@Component({
  selector: 'app-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.css']
})
export class BookContentComponent implements OnInit {
  book = sampleBook
  books:Array<Book>
  constructor() { 
    let booksController = new BooksController()
      this.books = booksController.findAll()
  }

  ngOnInit(): void {
  }

  handleButtonClick(){
    console.log("clicked!")
  }
}
