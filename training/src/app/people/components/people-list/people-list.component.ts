import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  peopleList:Array<Person>
  showPersonDetail = true
  peopleSubscription: Subscription
  constructor(readonly peopleService:PeopleService) {
    this.peopleSubscription = peopleService.peopleSubject.subscribe((people:Array<Person>) => this.peopleList = people)
    peopleService.findAll()
   }
  ngOnDestroy(): void {
    this.peopleSubscription.unsubscribe()
  }

  ngOnInit(): void {
  }
  switchDetails(){
    this.showPersonDetail = !this.showPersonDetail
  }
}
