import { Injectable } from '@angular/core';
import { Person } from './people.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  
  getActualProfile():Person{
    return {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}
  }
}
