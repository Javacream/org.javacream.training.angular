import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { Book, books } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  bookCreation = new Subject<string>()
  bookDeletion = new Subject<string>()
  bookList = new BehaviorSubject(new Array<Book>())
  log = new ReplaySubject<string>(5)
  constructor() { 
    this.bookCreation.subscribe(this.log)
    this.bookDeletion.subscribe(this.log)
  }
}
