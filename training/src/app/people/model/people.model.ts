import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

export interface Person{
    id:number
    lastname:string
    firstname:string
    gender:string
    height:number
}


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(readonly httpClient:HttpClient, readonly configService:ConfigService) { 

    this.people = new Map()
    this.people.set (101, create(101, "Sawitzki", "Rainer", "m", 183))
    this.people.set (102, create(102, "Meier", "Hannelore", "f", 175))
    this.people.set (103, create(103, "Meier", "Franz", "m", 186))
    this.people.set (104, create(104, "Metzger", "Johann", "m", 122))
    this.people.set (105, create(105, "Schneider", "Erna", "f", 199))
    setTimeout(() => {
      
      this.people.set(6, create(6, "XXX", "YYY", "f", 199))
      console.log(this.people)  
    }
      , 1000)
  }

  people: Map<number, Person>
  
  idCounter = 0
  
  deleteById(id:number){
    this.people.delete(id)
  }
  findById(id:number):Person|undefined{
    return this.people.get(id)
  }
  findAll(updateFn: (x:Array<Person>) => void){
    this.httpClient.get<Array<Person>>(this.configService.endpoint).subscribe((people) => updateFn(people))
  }

  create(lastname:string, firstname:string, gender="d", height=50){
    this.idCounter++
    let newPerson = {id:this.idCounter, lastname, firstname, gender, height}
    this.people.set(this.idCounter, newPerson)
    return this.idCounter
  }
}


function create(id:number, lastname:string, firstname:string, gender:string, height:number){
    return {id, lastname, firstname, gender, height}
}
