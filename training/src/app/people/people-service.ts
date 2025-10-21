import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  user: Person
  people:Array<Person> = []
  constructor() {
    this.user = {
      id: 42,
      lastname: 'Sawitzki',
      firstname: 'Rainer'
    }
    this.people.push({id: 1, lastname:'Sawitzki', firstname: 'Rainer'})
    this.people.push({id: 2, lastname:'Musterperson', firstname: 'Andrea'})
    this.people.push({id: 3, lastname:'Schneider', firstname: 'Hannah'})

  }

  
}
