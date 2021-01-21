import { Injectable } from '@angular/core';
import { Person } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  
  getActualProfile():Person{
    let person = {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
    setTimeout(() => {
      person.lastname = "SAWITZKI"
      console.log(person.lastname)
    }, 1000)
    return person
  }
}
