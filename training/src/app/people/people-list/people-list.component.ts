import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WhiteboardService } from 'src/app/util/services/whiteboard.service';
import { Person } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy{
  peopleList: Array<Person>
  constructor(readonly peopleService: PeopleService, readonly whiteboard:WhiteboardService){
    this.peopleList =  Array.from(peopleService.people.values())
  }

  createSubscription?:Subscription
  deleteSubscription?:Subscription
  ngOnDestroy(): void {
    this.createSubscription?.unsubscribe()
    this.deleteSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    this.createSubscription = this.whiteboard.personCreation.subscribe( (id) => {
      this.peopleList =  Array.from(this.peopleService.people.values())
   })
   this.deleteSubscription = this.whiteboard.personDeletion.subscribe( (id) => {
    this.peopleList =  Array.from(this.peopleService.people.values())
 })
}

}
