import { Injectable } from '@angular/core';
import {Person} from '../model/people.model'
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile:Person = {id: 0, lastname: "Sawitzki", firstname:"Rainer", gender:"m", height:183}
  constructor() { 
    setTimeout(() => {this.profile.lastname="Meier"; console.log(this.profile)}, 5000)
  }

  getProfile():Person{
    return this.profile
  }
}
