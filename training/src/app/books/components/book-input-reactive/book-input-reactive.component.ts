import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-book-input-reactive',
  templateUrl: './book-input-reactive.component.html',
  styleUrls: ['./book-input-reactive.component.css']
})
export class BookInputReactiveComponent implements OnInit {

  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }
  bookForm = new FormGroup( 
    {
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
    }
  );
  save(){
    let title = this.bookForm.value.title
    console.log(`created new book using title ${title}`)
    this.booksService.create(title, (isbn:string) => {
      this.bookEventEmitter.emit(isbn)

    })
  }

  @Output() bookEventEmitter = new EventEmitter<string>()
  
}
