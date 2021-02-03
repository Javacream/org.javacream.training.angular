import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { WhiteboardService } from 'src/app/util/model/whiteboard.service';
import { Config } from './config';


export interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleSubject = new Subject<Array<Person>>()
  personSearchSubject = new Subject<Person>()
  personDeleteSubject = new Subject<number>()
  personCreateSubject = new Subject<Object>()
  
  constructor(readonly httpClient:HttpClient, readonly config:Config, readonly whiteboard:WhiteboardService) {
  }

  create(lastname:string, firstname:string, gender= "d", height=50){
    this.saveOrUpdate({id:42, lastname, firstname, gender, height})
  }
  findAll():void{
      this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe((people) => this.peopleSubject.next(people))
  }

  findById(id:number){
    this.httpClient.get<Person>(`${this.config.endpoint}/${id}`).subscribe((person) => {this.personSearchSubject.next(person), this.whiteboard.actionsSubject.next("search")})
  }  
  
  deleteById(id:number){
    this.httpClient.delete(`${this.config.endpoint}/${id}`).subscribe(() => {this.personDeleteSubject.next(id), this.whiteboard.actionsSubject.next("delete")})
  }
  saveOrUpdate(person:Person){
    this.httpClient.post(this.config.endpoint, person).subscribe(() => {this.personCreateSubject.next(), this.whiteboard.actionsSubject.next("saveOrUpdate")})
  }

}
