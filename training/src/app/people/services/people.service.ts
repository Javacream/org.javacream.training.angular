import { Injectable } from '@angular/core';
import { Person } from '../schema/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  counter = 0
  peopleMap: Map<number, Person>
  constructor() {
    this.peopleMap = new Map()
    this.peopleMap.set(1000, {id: 1000, lastname:"Sawitzki", firstname: "Rainer"})
    this.peopleMap.set(1001, {id: 1002, lastname:"Mustermann", firstname: "Hannah"})
    this.peopleMap.set(1002, {id: 1003, lastname:"Schneider", firstname: "Andrea"})
  }
  
  createPerson(lastname:string, firstname:string):number{
    this.counter++
    let p:Person = {id:this.counter, lastname, firstname}
    this.peopleMap.set(p.id, p)
    return p.id
  }

  findPersonById(id:number){
    return this.peopleMap.get(id)
  }
  deletePersonById(id:number){
    this.peopleMap.delete(id)
  }
}
