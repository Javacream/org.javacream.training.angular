import { Injectable } from '@angular/core';
import { Person } from '../schema/person';
import { WhiteboardService } from './whiteboard.service';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  counter = 0
  peopleMap: Map<number, Person>
  constructor(readonly whiteboard:WhiteboardService, readonly httpClient: HttpClient) {
    this.peopleMap = new Map()
    this.peopleMap.set(1000, {id: 1000, lastname:"Sawitzki", firstname: "Rainer", height:177, gender:'m'})
    this.peopleMap.set(1001, {id: 1002, lastname:"Mustermann", firstname: "Hannah", height:177, gender:'f'})
    this.peopleMap.set(1002, {id: 1003, lastname:"Schneider", firstname: "Andrea", height:177, gender:'d'})
  }
  
  createPerson(lastname:string, firstname:string):void{
    this.counter++
    let p:Person = {id:this.counter, lastname, firstname, height: 177, gender: 'd'}
    this.peopleMap.set(p.id, p)
    this.whiteboard.personCreated.next(p)
  }

  findPersonById(id:number):void{
    this.whiteboard.personSearchResult.next(this.peopleMap.get(id))
  }
  deletePersonById(id:number){
    this.peopleMap.delete(id)
    this.whiteboard.personDeleted.next(id)
  }

  findAllPeopleFromServer(){
    this.httpClient.get('javacream.eu:8080/people/6').subscribe((person) => console.log(person))
  }
}
