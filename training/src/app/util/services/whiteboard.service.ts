import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Person } from '../../people/model/people';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  demo_channel = new Subject<string>()
  personCreated_channel = new Subject<number>()
  personDeleted_channel = new Subject<number>()
  peopleChanged_channel = new Subject<number>()
  logs_channel = new BehaviorSubject<string>('nothing')
  
  constructor() { 
    this.personCreated_channel.subscribe(id => this.logs_channel.next("person created"))
    this.personCreated_channel.subscribe(id => this.peopleChanged_channel.next(id))
    this.personDeleted_channel.subscribe(id => this.peopleChanged_channel.next(id))
    this.personDeleted_channel.subscribe(id => this.logs_channel.next("person deleted"))
  }
  
}
