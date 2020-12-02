import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
import { WhiteboardService } from './whiteboard.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  counter = 0;
  constructor(readonly http: HttpClient, readonly whiteboard: WhiteboardService) { }
 
  findAllBooks():void{
    this.http.get<Array<Book>>(`http://localhost:8080/api/books`).subscribe( (books) => this.whiteboard.bookList.next(books))
  }
  
  
  findBookByIsbn(isbn:string, update:(book:Book)=> void):void{
    this.http.get<Book>(`http://localhost:8080/api/books/${isbn}`).subscribe(update)
  }

  create(title:string, update = () => {}){
    this.http.post<void>(`http://localhost:8080/api/books/${title}`, {}, {responseType:'text' as 'json'}).subscribe(
        () => {
                this.whiteboard.bookCreation.next(`created new book using title ${title}`)
                update()
              }
        )
  }
  delete(isbn:string, update: () => void){
    this.http.delete<void>(`http://localhost:8080/api/books/${isbn}`, {}).subscribe(
      () => {
        this.whiteboard.bookDeletion.next(`deleted book using isbn ${isbn}`)
              update()
      })
  }
  
}
