import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import {NotificationService} from '../../services/notification.service' 

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrls: ['./book-input.component.css']
})
export class BookInputComponent implements OnInit {

  constructor(readonly booksService:BooksService, readonly notificationService:NotificationService) { }

  ngOnInit(): void {
  }

  titleInput = "Change Title"

  handleSave(){
    this.booksService.create(this.titleInput, (isbn:string) => {
      this.notificationService.notify("books", `created new book using title ${this.titleInput}`)
    })
  }
}
