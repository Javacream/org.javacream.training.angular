import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'http://h2908727.stratoserver.net:8080/api/store'

  constructor(readonly http: HttpClient) { }

  getStock(category:string, item:string, update: (stock: number)=>void){
    this.http.get<number>(`${this.baseUrl}/${category}/${item}`).subscribe(update)

  }
  setStock(category:string, item:string, stock: number, update: ()=>void){
    this.http.post<void>(`${this.baseUrl}/${category}/${item}`, {headers: {'stock': stock}}, {responseType:'text' as 'json'}).subscribe(update)
  }
}
