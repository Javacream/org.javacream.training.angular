import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhiteboardService {
  personCreation = new Subject<number>()
  personDeletion = new Subject<number>()
  personSearch = new Subject<number>()
  actions = new Subject<string>()
  constructor() {
    this.personCreation.subscribe((data) => this.actions.next("created person, id=" + data));
    this.personDeletion.subscribe((data) => this.actions.next("deleted person, id=" + data));
    this.personSearch.subscribe((data) => this.actions.next("searched for person, id=" + data));
  }
}
