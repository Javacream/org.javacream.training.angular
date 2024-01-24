import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../../people/model/people';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  demo_channel = new Subject<string>()
  personCreated_channel = new Subject<Person>()
  logs_channel = new BehaviorSubject<string>('nothing')
  
  constructor() { 
    this.personCreated_channel.subscribe(p => this.logs_channel.next("person created"))
  }
  
}
