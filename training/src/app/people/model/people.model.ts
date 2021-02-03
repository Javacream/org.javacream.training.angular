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
  people = new Map<number, Person>()
  counter = 100
  peopleSubject = new Subject<Array<Person>>()
  personSearchSubject = new Subject<Person>()
  personDeleteSubject = new Subject<number>()
  
  constructor(readonly httpClient:HttpClient, readonly config:Config, readonly whiteboard:WhiteboardService) {
    this.create("Meier", "Hans", "m")
    this.create("Schneider", "Brunhilde", "f")
    this.create("Metzger", "Georg", "m")
    this.create("Hoffman", "Hanna", "f")
    

  }

  create(lastname:string, firstname:string, gender= "d", height=50){
    this.counter++
    this.people.set(this.counter, {id:this.counter, lastname, firstname, gender, height})
    return this.counter
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
    return this.people.set(person.id, person)
  }

}
