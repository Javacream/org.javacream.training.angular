import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../schema/person';
import {Subscription} from 'rxjs'
import { WhiteboardService } from '../../services/whiteboard.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit, OnDestroy{  

  peopleList: Array<Person>
  constructor(readonly peopleService:PeopleService, readonly whiteboard: WhiteboardService){
    this.peopleList = Array.from(peopleService.peopleMap.values())
  }
  createdSubscription?: Subscription
  deletedSubscription?: Subscription
  ngOnInit(): void {
    this.createdSubscription=this.whiteboard.personCreated.subscribe((p:Person) => this.peopleList = Array.from(this.peopleService.peopleMap.values()))
    this.deletedSubscription=this.whiteboard.personDeleted.subscribe((id:number) => this.peopleList = Array.from(this.peopleService.peopleMap.values()))
  }

  ngOnDestroy(): void {
    this.createdSubscription?.unsubscribe()
    this.deletedSubscription?.unsubscribe()
  }

}
