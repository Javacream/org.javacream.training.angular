import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import {Subject} from 'rxjs'
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

  create(lastname:string, firstname:string){
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.httpClient.post<number>(this.configService.endpoint, newPerson).subscribe((result) => this.personCreatedSubject.next(this.idCounter))
  }

  personCreatedSubject = new Subject<number>()
}
