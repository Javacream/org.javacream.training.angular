import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  isbnInput:string
  constructor(readonly booksService: BooksService) { }

  ngOnInit(): void {
  }

  delete(){
    this.booksService.delete(this.isbnInput, () => {})
  }
}
