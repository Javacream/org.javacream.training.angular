import { Component, OnInit } from '@angular/core';
import { BooksController } from '../../model/books';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titleInput = "Change Title"
  priceInput = "Change Price"
  pagesInput = "Change Pages"
  booksController = new BooksController()

  handleSave(){
    console.log(`created new book using title ${this.titleInput}`)
    this.booksController.create(this.titleInput, 200, 19.99, false)
  }
}
