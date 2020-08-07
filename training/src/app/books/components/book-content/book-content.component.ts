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

  async ngOnInit() {
    this.books = await this.booksService.findAllBooksFetch()}

  handleButtonClick(){
    console.log("clicked!")
  }

  async handleBookCreation(isbn:string){
    this.books = await this.booksService.findAllBooksFetch()
  }
}
