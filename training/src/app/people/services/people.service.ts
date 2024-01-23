import { Injectable } from '@angular/core';
import { Person } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  user:Person  = {id: 1000, lastname:'Mustermann', firstname: 'Max'}
  peopleMap: Map<number, Person>
  constructor() { 
    this.peopleMap = new Map()
    this.peopleMap.set(100, {id: 100, lastname: 'Sawitzki', firstname: 'Rainer'})
    this.peopleMap.set(101, {id: 101, lastname: 'Metzger', firstname: 'Hannah'})
    this.peopleMap.set(102, {id: 102, lastname: 'Sawitzki', firstname: 'Andrea'})
  }
  getUser():Person {
    return this.user
  }
  findAll():Array<Person>{
    return Array.from(this.peopleMap.values())
  }
}
