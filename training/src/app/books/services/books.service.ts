import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
import {NotificationService} from './notification.service' 

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  counter = 0;
  constructor(readonly http: HttpClient, readonly notificationService:NotificationService) { }


  async findAllBooksFetch(){
    try{
      let response:Response = await fetch("http://10.28.6.1:8080/api/books")
      let data:Array<Book> = await response.json()
      return data
    }
    catch(error){
      console.log(error)
    }
  
  }

  async findBookByIsbn(isbn:string){
    try{
      let response:Response = await fetch(`http://10.28.6.1:8080/api/books/${isbn}`)
      let data:Book = await response.json()
      return data
    }
    catch(error){
      console.log(error)
    }
  
  }
  findAllBooksHttpClient(update:(books:Array<Book>)=> void):void{
    this.http.get<Array<Book>>(`http://10.28.6.1:8080/api/books`).subscribe(update)
  }
  create(title:string){
    this.http.post<void>(`http://10.28.6.1:8080/api/books/${title}`, {}, {responseType:'text' as 'json'}).subscribe(
        () => this.notificationService.notify("books", `created new book using title ${title}`)
        )
}


}
