import { Component, OnInit, Input } from '@angular/core';
import { Book, Empty } from '../../model/books';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book:Book =Empty
  constructor(readonly booksService: BooksService) { 
  }

  ngOnInit(): void {
  }

  delete(isbn:string){
    this.booksService.delete(isbn, () => {})
  }

}
