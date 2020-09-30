import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
import {whiteboard} from '../../whiteboard'

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  counter = 0;
  constructor(readonly http: HttpClient) { }

  findBookByIsbn(isbn:string){
    this.http.get<Book>(`http://localhost:8080/api/books/${isbn}`).subscribe((book) => whiteboard.searchResult.next(book))
  }

  findAllBooks():void{
    this.http.get<Array<Book>>(`http://localhost:8080/api/books`).subscribe((books) => whiteboard.bookList.next(books))
  }
  create(title:string){
    this.http.post<void>(`http://localhost:8080/api/books/${title}`, {}, {responseType:'text' as 'json'}).subscribe(
        () => {
            whiteboard.log.next(`created book with title ${title}`)
        }
      )
  }
  deleteBookByIsbn(isbn:string, update?: () => void){
    this.http.delete<void>(`http://localhost:8080/api/books/${isbn}`).subscribe(
      () => {whiteboard.log.next(`deleted book with isbn ${isbn}`)}
  
    )
  }


}
