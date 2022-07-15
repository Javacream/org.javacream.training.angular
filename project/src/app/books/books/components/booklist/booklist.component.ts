import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../model/books';
import { BooksService } from '../../services/books.service';
import { WhiteboardService } from '../../services/whiteboard.service';
import { Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnDestroy {
  bookCreationSubscription:Subscription
  bookDeletionSubscription:Subscription
  bookListSubscription:Subscription
  ngOnDestroy(): void {
    this.bookCreationSubscription.unsubscribe()
    this.bookDeletionSubscription.unsubscribe()
    this.bookListSubscription.unsubscribe()
  }
  books: Array<Book>
  constructor(readonly booksService:BooksService, readonly whiteboard:WhiteboardService) {}

  ngOnInit() {
      let updateBooks = () => this.booksService.findAllBooks()
      this.bookCreationSubscription = this.whiteboard.bookCreation.subscribe(updateBooks)
      this.bookDeletionSubscription = this.whiteboard.bookDeletion.subscribe(updateBooks)
      this.bookListSubscription = this.whiteboard.bookList.subscribe((books) => this.books = books)
      updateBooks()
  }

}
