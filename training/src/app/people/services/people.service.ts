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
