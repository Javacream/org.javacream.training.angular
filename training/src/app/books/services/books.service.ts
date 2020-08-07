import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { Book } from '../model/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

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

  findAllBooksHttpClient(){
    
  }

}
