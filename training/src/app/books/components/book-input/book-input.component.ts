import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksController } from '../../model/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }

  titleInput = "Change Title"
  priceInput = 19.99
  pagesInput = 42

  handleSave(){
    console.log(`created new book using title ${this.titleInput}`)
    this.booksService.create(this.titleInput, (isbn:string) => {
      this.bookEventEmitter.emit(isbn)

    })
  }

  @Output() bookEventEmitter = new EventEmitter<string>()
}
