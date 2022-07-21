import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseUrl = 'http://h2908727.stratoserver.net:8080/api/store'

  constructor(readonly http: HttpClient) { }

  getStock(category:string, item:string, update: (stock: string)=>void){
    console.log("CALLING")
    this.http.get<string>(`${this.baseUrl}/${category}/${item}`).subscribe(update)

  }
  setStock(category:string, item:string, stock: number, update: ()=>void){
    const headers = new HttpHeaders().set('stock', `${stock}`)
    this.http.post<void>(`${this.baseUrl}/${category}/${item}`, {}, {headers: headers, responseType:'text' as 'json'}).subscribe(update)
  }
}
