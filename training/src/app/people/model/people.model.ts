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
  
  deleteById(id:number){
    this.httpClient.delete(`${this.configService.endpoint}/${id}`).subscribe(() => this.personDeletedSubject.next(id))
  
  }
  findById(id:number){
    this.httpClient.get<Person>(`${this.configService.endpoint}/${id}`).subscribe((person) => this.personSearchSubject.next(person))
  }
  
  findAll(){
    this.httpClient.get<Array<Person>>(this.configService.endpoint).subscribe((people) => this.peopleListSubject.next(people))
  }

  create(lastname:string, firstname:string){
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.httpClient.post(this.configService.endpoint, newPerson).subscribe(() => this.personCreatedSubject.next(this.idCounter))
  }

  personCreatedSubject = new Subject<number>()
  peopleListSubject = new Subject<Array<Person>>()
  personDeletedSubject = new Subject<number>()
  personSearchSubject = new Subject<Person>()

}
