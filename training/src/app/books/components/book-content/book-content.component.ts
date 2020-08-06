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
  constructor(readonly booksController:BooksController) {this.books = booksController.findAll()}

  ngOnInit(): void {
    this.books = this.booksController.findAll()}

  handleButtonClick(){
    console.log("clicked!")
  }
}
