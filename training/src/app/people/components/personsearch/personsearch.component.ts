import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-personsearch',
  templateUrl: './personsearch.component.html',
  styleUrls: ['./personsearch.component.css']
})
export class PersonsearchComponent implements OnInit, OnDestroy {
  subscription:Subscription
  constructor(readonly peopleService:PeopleService) {
    this.subscription = peopleService.personSearchSubject.subscribe((person) => this.searchResult = person )
   }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  ngOnInit(): void {
  }
  idInput:string
  searchResult:Person | undefined
  searchPerson(){
    this.peopleService.findById(Number(this.idInput))
  }
}
