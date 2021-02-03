import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Person{
    id:number
    lastname:string
    firstname:string
    height:number
    gender:string
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = new Map<number, Person>()
  counter = 100
  constructor(readonly httpClient:HttpClient) {
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
  findAll(update: (_:Array<Person>)=> void){
      this.httpClient.get<Array<Person>>("http://h2908727.stratoserver.net:8080/people").subscribe(update)
      //return Array.from(this.people.values())
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
