import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person, PersonClass } from '../model/people';
import {publish} from 'pubsub-js'

@Injectable({
  providedIn: 'root'
})
export class PeopleControllerService {
  endpoint = "http://localhost:8080/people"
  constructor(readonly httpClient: HttpClient) { }

  async findAllPeopleAsyncAwait():Promise<Array<Person>>{
    let response = await fetch(this.endpoint)
    let people:Array<Person> = await response.json()
    publish('person.search')
    return people
  }

  findAllPeopleObserver( updateFunction: (result: Array<Person> )=> void){
    this.httpClient.get<Array<Person>>(this.endpoint).subscribe(updateFunction)
    publish('person.search')

  }
  findById(id:number, updateFunction: (result: Person )=> void){
    this.httpClient.get<Person>(this.endpoint + "/" + id).subscribe(updateFunction)
    publish('person.search', id)

  }
  deleteById(id:number, updateFunction: ()=> void){
    this.httpClient.delete<void>(this.endpoint + "/" + id).subscribe(updateFunction)
    publish('person.delete', id)
  }

  create(lastname: string, firstname: string, updateFunction: () => void, gender = "x", height=183, ) {
    const p = new PersonClass(0, lastname, firstname, gender, height);
    this.httpClient.post<void>(this.endpoint, p).subscribe(updateFunction)
    publish('person.create')
  }
}
