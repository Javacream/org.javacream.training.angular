import { Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { BooksService } from '../../services/books.service';
import {validateBook} from '../../validators/books-validators'
@Component({
  selector: 'app-book-input-reactive',
  templateUrl: './book-input-reactive.component.html',
  styleUrls: ['./book-input-reactive.component.css']
})
export class BookInputReactiveComponent implements OnInit {
  validateForm = false
  constructor(readonly booksService:BooksService) { }
  bookForm: FormGroup
  ngOnInit(): void {
  this.bookForm = new FormGroup( 
    {
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      pages: new FormControl(0, Validators.compose([Validators.required, Validators.min(1)])),
      
    });
  }
  save(){
    let title = this.bookForm.value.title
    this.booksService.create(title)
 }

 toggleFormValidation(){
  if (this.validateForm){
    this.bookForm.setValidators(validateBook)
  }else{
    this.bookForm.setValidators(Validators.nullValidator)
  }
  this.validateForm = !this.validateForm;
  this.bookForm.updateValueAndValidity()

}
  
}
