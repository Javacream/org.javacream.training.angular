import { Injectable } from '@angular/core';
import { Person } from '../model/people';
import {NotificationService} from './notification.service' 
@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  people = new  Map<number, Person>()
  counter = 0
  constructor(readonly notificationService: NotificationService) {}

  create(person: Person){
    this.counter++
    person.id = this.counter
    this.people.set(person.id, person)
    this.notificationService.notify("people.created", `created person with id ${person.id}`)
  }

  findById(id:number):Person{
    this.notificationService.notify("people.searched", id)
    return this.people.get(id)
  }
  deleteById(id:number):void{
    this.people.delete(id)
  }

  findAll(): Array<Person>{
    return Array.from(this.people.values())
  }

  peopleMap():Map<Number, Person>{
    return this.people
  }
}
