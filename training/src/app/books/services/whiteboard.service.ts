import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { books } from '../model/books';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  bookCreation = new Subject()
  bookDeletion = new Subject()
  bookList = new BehaviorSubject([])
  log = new ReplaySubject(5)
  constructor() { 
    this.bookCreation.subscribe(this.log)
    this.bookDeletion.subscribe(this.log)
  }
}
