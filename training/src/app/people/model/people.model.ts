export interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = new Map<number, Person>()
  counter = 100
  constructor() {
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
  findAll(){
      return Array.from(this.people.values())
  }

  findById(id:number){
    return this.people.get(id)
  }
  deleteById(id:number){
    return this.people.delete(id)
  }
  saveOrUpdate(person:Person){
    return this.people.set(person.id, person)
  }

}
