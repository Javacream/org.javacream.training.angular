import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/books';
import { BooksService } from '../../services/books.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  book:Book
  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }


  bookForm = new FormGroup( 
    {
      isbn: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
    }
  ); 
  search(){
    this.booksService.findBookByIsbn(this.bookForm.value.isbn, (book) => {
      this.book = book
    })
  }

}
