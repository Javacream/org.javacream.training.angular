import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  constructor(readonly booksService:BooksService) { }

  ngOnInit(): void {
  }

  titleInput = "Change Title"

  handleSave(){
    this.booksService.create(this.titleInput)
  }
}
