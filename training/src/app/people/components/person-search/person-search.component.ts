import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit, OnDestroy {
  searchId=0
  personResult:Person|undefined
  personSearchSubscription:Subscription
  constructor(readonly peopleService:PeopleService) {
    this.personSearchSubscription = peopleService.personSearchSubject.subscribe((person:Person) => this.personResult = person)

   }

  ngOnDestroy(): void {
    this.personSearchSubscription.unsubscribe()
  }

  ngOnInit(): void {
  }

  search(){
    this.peopleService.findById(this.searchId)
  }

}
