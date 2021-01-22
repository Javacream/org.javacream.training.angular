import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

export interface Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(readonly httpClient:HttpClient, readonly configService:ConfigService) {}

  people: Map<number, Person>
  
  idCounter = 0
  
  deleteById(id:number, updateFn: () => void){
    this.httpClient.delete(`${this.configService.endpoint}/${id}`).subscribe(updateFn)
  
  }
  findById(id:number, updateFn: (x:Person)=> void){
    this.httpClient.get<Person>(`${this.configService.endpoint}/${id}`).subscribe(updateFn)
  }
  
  findAll(updateFn: (x:Array<Person>) => void){
    this.httpClient.get<Array<Person>>(this.configService.endpoint).subscribe((people) => updateFn(people))
  }

  create(lastname:string, firstname:string, updateFn: (x:number) => void){
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.httpClient.post(this.configService.endpoint, newPerson).subscribe((result) => updateFn(this.idCounter))
  }
}
