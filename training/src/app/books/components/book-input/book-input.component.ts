import { Component, OnInit } from '@angular/core';
import { BooksController } from '../../model/books';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  constructor(readonly booksController:BooksController) { }

  ngOnInit(): void {
  }

  titleInput = "Change Title"
  priceInput = 19.99
  pagesInput = 42

  handleSave(){
    console.log(`created new book using title ${this.titleInput} and price ${this.priceInput} and pages ${this.pagesInput}`)
    this.booksController.create(this.titleInput, Number(this.pagesInput), Number(this.priceInput), false)
  }
}
