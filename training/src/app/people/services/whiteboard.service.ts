import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Person } from '../schema/person';
@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  constructor() { }

  personCreated = new Subject<Person>()
  personDeleted = new Subject<number>()
  personSearchResult = new Subject<Person|undefined>()
  user = new Subject<Person>()
}
