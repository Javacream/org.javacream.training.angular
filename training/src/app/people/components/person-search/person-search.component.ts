import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleModel, Person } from '../../model/people.model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit, OnDestroy {
  subscriptionForSearch: Subscription;
  constructor(readonly peopleModel:PeopleModel){
    this.subscriptionForSearch = peopleModel.subjectForPersonSearch.subscribe((person) => this.searchResult = person)
  }
  ngOnDestroy(): void {
    this.subscriptionForSearch.unsubscribe()
  } 
  searchResult:Person | undefined
  searchId:number | undefined
  ngOnInit(): void {
  }
  search(){
    this.peopleModel.findById(Number(this.searchId))
  }
}
