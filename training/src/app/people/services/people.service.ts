import { Injectable } from '@angular/core';
import { Person } from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  user:Person  = {id: 1000, lastname:'Mustermann', firstname: 'Max'}
  constructor() { }
  getUser():Person {
    return this.user
  }
}
