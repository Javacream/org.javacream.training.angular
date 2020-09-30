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

  findBookByIsbn(isbn:string, update:(books?:Book)=> void){
    this.http.get<Book>(`http://localhost:8080/api/books/${isbn}`).subscribe(update)
  }

  findAllBooks(update:(books:Array<Book>)=> void):void{
    this.http.get<Array<Book>>(`http://localhost:8080/api/books`).subscribe(update)
  }
  create(title:string, update?: () => void){
    this.http.post<void>(`http://localhost:8080/api/books/${title}`, {}, {responseType:'text' as 'json'}).subscribe(
        () => {
            if (update){
              update()
            }
            whiteboard.log.next(`created book with title ${title}`)

        }
      )
  }
  deleteBookByIsbn(isbn:string, update?: () => void){
    this.http.delete<void>(`http://localhost:8080/api/books/${isbn}`).subscribe(
      () => {if (update){update()}
    }
    )
  }


}
