import { Injectable } from '@angular/core';
import { PersonIF } from '../model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  id = 0
  constructor() { }

  people:Map<number, PersonIF> = new Map([
      [1000, {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}],
      [1001, {id:1001, lastname:"Sawitzki", firstname:"Martha", gender:"w", height:193}],
      [1002, {id:1002, lastname:"Mustermann", firstname:"Andrea", gender:"x", height:173}]
  ]
  )

  savePerson(lastname:string, firstname:string, gender="x", height=155):PersonIF{
    const id = ++this.id
    const p = {id, lastname, firstname, gender, height}
    this.people.set(id, p)
    return p
  }
  findPersonById(id:number): PersonIF | undefined{
    return this.people.get(id)
  }

  deletePersonById(id:number){
    return this.people.delete(id)
  }
}
