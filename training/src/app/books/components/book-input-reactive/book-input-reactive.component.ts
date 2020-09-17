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
  berserkerMode = false;
  constructor(readonly booksService:BooksService) { }
  bookForm:FormGroup
  ngOnInit(): void {
  this.bookForm = new FormGroup( 
    {
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      price: new FormControl('', Validators.compose([Validators.required, Validators.min(0)])),
      pages: new FormControl('', Validators.compose([Validators.required, Validators.min(0)])),

    })
    this.bookForm.setValidators(validateBook)
}
  toggleBerserkerMode(){
    if (this.berserkerMode){
      this.bookForm.setValidators(validateBook)
    }else{
      this.bookForm.setValidators(Validators.nullValidator)
    }
    this.berserkerMode = !this.berserkerMode;
    this.bookForm.updateValueAndValidity()

  }
  save(){
    let title = this.bookForm.value.title
    console.log(`created new book using title ${title}`)
    this.booksService.create(title)
 }

}
