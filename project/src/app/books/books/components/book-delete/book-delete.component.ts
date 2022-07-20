import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(readonly booksService: BooksService) { }

  ngOnInit(): void {
  }

  bookForm:FormGroup = new FormGroup( 
    {
      isbn: new FormControl<string>('', Validators.compose([Validators.required, Validators.minLength(4)])),
    }
  );

  delete(){
    this.booksService.delete(this.bookForm.value.isbn, () => {})
  }
}
