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

  subscription?:Subscription
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  ngOnInit(): void {
    let subscription = this.whiteboard.personCreation.subscribe( (id) => {
      this.peopleList =  Array.from(this.peopleService.people.values())
   })
  }

}
