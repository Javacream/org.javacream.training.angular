import { Injectable } from '@angular/core';
import { Person, PersonClass } from '../model/people';
import { WhiteboardService } from '../../util/services/whiteboard.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  peopleMap: Map<number, Person>
  counter = 0
  constructor( readonly whiteBoardService:WhiteboardService, readonly httpClient: HttpClient) { 

    this.peopleMap = new Map()
    this.peopleMap.set(100, {id: 100, lastname: 'Sawitzki', firstname: 'Rainer'})
    this.peopleMap.set(101, {id: 101, lastname: 'Metzger', firstname: 'Hannah'})
    this.peopleMap.set(102, {id: 102, lastname: 'Sawitzki', firstname: 'Andrea'})
  }
  getUser():void {
    this.httpClient.get('http://javacream.eu:8080/people/6').subscribe(user => this.whiteBoardService.user_channel.next(user as Person))
    
  }
  findAll():void{
    this.whiteBoardService.people_channel.next(Array.from(this.peopleMap.values()))
  }
  create(lastname:string, firstname:string){
    let newPerson = new PersonClass(this.counter, lastname, firstname)
    this.peopleMap.set(newPerson.id, newPerson)
    this.counter += 1
    this.whiteBoardService.personCreated_channel.next(newPerson.id)
    //this.whiteBoardService.logs_channel.next("person created")
    this.whiteBoardService.createdPerson_channel.next(newPerson)
  }

  delete(id:number){
    this.peopleMap.delete(id)
    this.whiteBoardService.personDeleted_channel.next(id)

  }

}
