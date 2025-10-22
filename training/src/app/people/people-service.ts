import { Injectable } from '@angular/core';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  counter = 3
  peopleMap: Map<number, Person>
  constructor() {
    this.peopleMap = new Map()
    this.peopleMap.set(1, {id: 1, lastname:"Sawitzki", firstname: "Rainer"})
    this.peopleMap.set(2, {id: 2, lastname:"Mustermann", firstname: "Hannah"})
    this.peopleMap.set(3, {id: 3, lastname:"Schneider", firstname: "Andrea"})
  }
  
  create(lastname:string, firstname:string):number{
    this.counter++
    let p:Person = {id:this.counter, lastname, firstname}
    this.peopleMap.set(p.id, p)
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
  getUser():Person{
    return {id: 100, lastname:'Us', firstname: 'Er'}
  }
}