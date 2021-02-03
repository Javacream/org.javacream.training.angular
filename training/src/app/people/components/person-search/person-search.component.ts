import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  searchId=0
  personResult:Person|undefined
  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  search(){
    this.peopleService.findById(this.searchId, (person:Person) => this.personResult = person)
  }

}
