import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../../model/books';
import { BooksService } from '../../services/books.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnDestroy {
  subscription:string
  ngOnDestroy(): void {
    this.notificationService.unregister(this.subscription)
  }
  books: Array<Book>
  constructor(readonly booksService:BooksService, readonly notificationService: NotificationService) {}

  async ngOnInit() {
      this.subscription = this.notificationService.register("books.delete", async () => this.books = await this.booksService.findAllBooksFetch())
      this.books = await this.booksService.findAllBooksFetch()
//    this.booksService.findAllBooksFetch().then((books:Array<Book>) => {
//            this.books = books
//    })
//    this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
//      this.books = books
//    })
}


   handleBookCreation(isbn:string){
    this.booksService.findAllBooksHttpClient((books:Array<Book>) => {
        this.books = books
      })
    //this.books = await this.booksService.findAllBooksFetch()
  }
}
