import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { BooksService } from '../../services/books.service';
import {validateBook} from '../../validators/book-validators'
@Component({
  selector: 'app-book-input-reactive',
  templateUrl: './book-input-reactive.component.html',
  styleUrls: ['./book-input-reactive.component.css']
})
export class BookInputReactiveComponent implements OnInit {

  constructor(readonly booksService:BooksService) { }
  bookForm:FormGroup
  ngOnInit(): void {
  this.bookForm = new FormGroup( 
    {
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
    })
    this.bookForm.setValidators(validateBook)
    

}

  save(){
    let title = this.bookForm.value.title
    console.log(`created new book using title ${title}`)
    this.booksService.create(title)
 }
  
}
