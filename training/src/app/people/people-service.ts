import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  user: Person
  constructor() {
    this.user = {
      id: 42,
      lastname: 'Sawitzki',
      firstname: 'Rainer'
    }

  }

  
}
