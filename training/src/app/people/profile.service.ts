import { Injectable } from '@angular/core';
import { Person } from './model/people.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  profile:Person = {id:42, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}

  actualProfile(){
    return this.profile
  }
}
