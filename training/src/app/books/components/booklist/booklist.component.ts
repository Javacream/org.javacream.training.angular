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

  async ngOnInit() {
      this.bookCreationSubscription = this.whiteboard.bookCreation.subscribe(async () => this.books = await this.booksService.findAllBooksFetch())
      this.bookDeletionSubscription = this.whiteboard.bookDeletion.subscribe(async () => this.books = await this.booksService.findAllBooksFetch())
      this.bookListSubscription = this.whiteboard.bookList.subscribe((books) => this.books = books)
      this.booksService.findAllBooks()
      //this.books = await this.booksService.findAllBooksFetch()
  }


   handleBookCreation(isbn:string){
    this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
        this.books = books
      })
  }
}
