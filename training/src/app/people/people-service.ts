import { Injectable } from '@angular/core';
import { Person } from './person';
import { WhiteboardService } from './whiteboard-service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root', 
})
export class PeopleService {
  counter = 3
  peopleMap: Map<number, Person>
  constructor(readonly whiteboardService: WhiteboardService, readonly httpClient: HttpClient) {
    this.peopleMap = new Map()
    let p1 = {id: 1, lastname:"Sawitzki", firstname: "Rainer"}
    this.peopleMap.set(1, p1)
    this.peopleMap.set(2, {id: 2, lastname:"Mustermann", firstname: "Hannah"})
    this.peopleMap.set(3, {id: 3, lastname:"Schneider", firstname: "Andrea"})
    this.getUser() // simulates authentication ...
  }
  
  create(lastname:string, firstname:string):number{
    this.counter++
    let p:Person = {id:this.counter, lastname, firstname}
    this.peopleMap.set(p.id, p)
    this.whiteboardService.personCreated.next(p.id)
    return p.id
  }

  findById(id:number):Person | undefined{
    return this.peopleMap.get(id)
  }
  deleteById(id:number){
    if (this.peopleMap.has(id)){
      this.peopleMap.delete(id)
      return true
    }
    else return false
  }

  findAll():Array<Person>{
    return Array.from(this.peopleMap.values())
  }
  getUser(){
    this.httpClient.get<Person>('http://javacream.eu:8080/people/7').subscribe((person) => {
      this.whiteboardService.userAuthenticated.next(person)
    })
  }
}