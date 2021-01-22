import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit, OnDestroy {
  peopleListSubscription:Subscription
  personCreatedSubscription:Subscription
  personDeletedubscription:Subscription
  ngOnDestroy(): void {
    this.peopleListSubscription.unsubscribe()
    this.personCreatedSubscription.unsubscribe()
    this.personDeletedubscription.unsubscribe()
  }  

  peopleList:Array<Person>
  constructor(private peopleService:PeopleService) { 

    this.peopleListSubscription = peopleService.peopleListSubject.subscribe((people) => this.peopleList = people)
    this.personCreatedSubscription = peopleService.personCreatedSubject.subscribe((id) => peopleService.findAll())
    this.personDeletedubscription = peopleService.personDeletedSubject.subscribe((id) => peopleService.findAll())
    peopleService.findAll()

  }

  ngOnInit(): void {
  }
  detail = false
  switchDetail(){
    this.detail = !this.detail
  }

}
