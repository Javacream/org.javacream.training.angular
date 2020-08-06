import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { BooksController } from '../../model/books';
@Component({
  selector: 'app-book-input-reactive',
  templateUrl: './book-input-reactive.component.html',
  styleUrls: ['./book-input-reactive.component.css']
})
export class BookInputReactiveComponent implements OnInit {

  constructor(readonly booksController:BooksController) { }

  ngOnInit(): void {
  }
  bookForm = new FormGroup({
    title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    pages: new FormControl(0, Validators.compose([Validators.required, Validators.min(1), Validators.max(5000)])),
    price: new FormControl(0, Validators.compose([Validators.required, Validators.min(0), Validators.max(1000)])),
    available: new FormControl(true),
  });
  save(){
    let bookData = this.bookForm.value
    let isbn = this.booksController.create(bookData.title, bookData.pages, bookData.price, bookData.available)
    this.bookEventEmitter.emit(isbn)
  }

  @Output() bookEventEmitter = new EventEmitter<string>()
  
}
