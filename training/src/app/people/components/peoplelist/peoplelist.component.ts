import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit, OnDestroy {
  subscription:Subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }  

  peopleList:Array<Person>
  constructor(private peopleService:PeopleService) { 

    peopleService.peopleListSubject.subscribe((people) => this.peopleList = people)
    peopleService.personCreatedSubject.subscribe((id) => peopleService.findAll())
    peopleService.personDeletedSubject.subscribe((id) => peopleService.findAll())
    peopleService.findAll()

  }

  ngOnInit(): void {
  }
  detail = false
  switchDetail(){
    this.detail = !this.detail
  }

}
