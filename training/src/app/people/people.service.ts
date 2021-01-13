import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ConfigService } from './config.service';
import { Person } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient:HttpClient, private config:ConfigService) { 
  }

  idCounter = 100
  
  deleteById(id:number){
    this.httpClient.delete(`${this.config.endpoint}/${id}`).subscribe(() => this.personDeletedObservable.next(id))
  }
  findById(id:number, updateFn: (x:Person)=> void){
    this.httpClient.get<Person>(`${this.config.endpoint}/${id}`).subscribe((person) => this.personSearchObservable.next(person))
  }
  peopleList(){
    this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe((people) => this.peopleListObservable.next(people))
  }

  create(lastname:string, firstname:string){
    this.idCounter++
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.httpClient.post(this.config.endpoint, newPerson).subscribe(() => this.personCreatedObservable.next(this.idCounter))
  }


  peopleListObservable = new Subject<Array<Person>>()
  personCreatedObservable = new Subject<number>()
  personDeletedObservable = new Subject<number>()
  personSearchObservable = new Subject<Person>()


}

