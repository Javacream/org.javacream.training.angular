import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Person } from '../../people/model/people';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  demo_channel = new Subject<string>()
  personCreated_channel = new Subject<Person>()
  constructor() { }
  
}
