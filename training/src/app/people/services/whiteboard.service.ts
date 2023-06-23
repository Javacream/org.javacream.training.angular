import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
import { Person } from '../schema/person';
@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {

  constructor() { }

  personCreated = new Subject<number>()
  personSearchResult = new Subject<Person|undefined>()
}
