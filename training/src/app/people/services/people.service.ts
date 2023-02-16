import { Injectable } from '@angular/core';
import { PersonIF } from '../model/people.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  people:Array<PersonIF> = [
    {id:1000, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183},
    {id:1001, lastname:"Sawitzki", firstname:"Martha", gender:"w", height:193},
    {id:1002, lastname:"Mustermann", firstname:"Andrea", gender:"x", height:173},
  ]
}
