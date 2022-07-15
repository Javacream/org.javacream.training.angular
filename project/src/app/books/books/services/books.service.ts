import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
import { WhiteboardService } from './whiteboard.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseUrl = 'http://h2908727.stratoserver.net:8080/api/books'
  counter = 0;
  constructor(readonly http: HttpClient, readonly whiteboard: WhiteboardService) { }
  async findBookByIsbn(isbn:string){
    try{
      let response:Response = await fetch(`${this.baseUrl}/${isbn}`)
      let data:Book = await response.json()
      return data
    }
    catch(error){
      console.log(error)
      throw error
    }
  
  }
  findAllBooks():void{
    this.http.get<Array<Book>>(`${this.baseUrl}`).subscribe( (books) => this.whiteboard.bookList.next(books))
  }
  findBookByIsbnHttpClient(isbn:string, update:(book:Book)=> void):void{
    this.http.get<Book>(`${this.baseUrl}/${isbn}`).subscribe(update)
  }

  create(title:string, update = () => {}){
    this.http.post<void>(`${this.baseUrl}/${title}`, {}, {responseType:'text' as 'json'}).subscribe(
        () => {
                this.whiteboard.bookCreation.next(`created new book using title ${title}`)
                update()
              }
        )
  }
  delete(isbn:string, update: () => void){
    this.http.delete<void>(`${this.baseUrl}/${isbn}`, {}).subscribe(
      () => {
        this.whiteboard.bookDeletion.next(`deleted book using isbn ${isbn}`)
              update()
      })
  }
  
}
