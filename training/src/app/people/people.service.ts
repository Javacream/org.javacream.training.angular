import { Injectable } from '@angular/core';
import { Person } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { 

    people = new Map()
    
  }

  people: Map<number, Person>
  
  idCounter = 0
  
  findById(id:number):Person|undefined{
    return this.people.get(id)
  }
  peopleList(){
    return Array.from(this.people.values())
  }

  create(lastname:string, firstname:string){
    this.idCounter++
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.people.set(this.idCounter, newPerson)
  }
}
