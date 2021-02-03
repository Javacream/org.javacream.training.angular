import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from './config';


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
  constructor(readonly httpClient:HttpClient, readonly config:Config) {
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
      this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe(update)
      //return Array.from(this.people.values())
  }

  findById(id:number, update: (_:Person)=> void){
    this.httpClient.get<Person>(`${this.config.endpoint}/${id}`).subscribe(update)  }
  
    deleteById(id:number){
    return this.people.delete(id)
  }
  saveOrUpdate(person:Person){
    return this.people.set(person.id, person)
  }

}
