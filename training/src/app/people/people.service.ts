import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { Person } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private httpClient:HttpClient, private config:ConfigService) { 
  }

  idCounter = 100
  
  deleteById(id:number, updateFn: () => void){
    this.httpClient.delete(`${this.config.endpoint}/${id}`).subscribe(updateFn)
  }
  findById(id:number, updateFn: (x:Person)=> void){
    this.httpClient.get<Person>(`${this.config.endpoint}/${id}`).subscribe(updateFn)
  }
  peopleList(updateFn: (x:Array<Person>)=> void){
    this.httpClient.get<Array<Person>>(this.config.endpoint).subscribe(updateFn)
  }

  create(lastname:string, firstname:string, updateFn: (x:number) => void){
    this.idCounter++
    let newPerson = {id:this.idCounter, lastname, firstname, height: 180, gender:"d"}
    this.httpClient.post(this.config.endpoint, newPerson).subscribe(() => updateFn(this.idCounter))
    return this.idCounter
  }
}

