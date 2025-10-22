import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  
  personCreated = new Subject<number>()
  userAuthenticated = new Subject<Person>()
}
