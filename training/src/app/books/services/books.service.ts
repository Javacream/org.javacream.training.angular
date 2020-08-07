import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  counter = 0;
  constructor(readonly http: HttpClient) { }


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
  create(title:string, update: (isbn:string) => void){
    this.http.post<string>(`http://10.28.6.1:8080/api/books/${title}`, {}, {responseType:'text' as 'json'}).subscribe(update)
}


}
