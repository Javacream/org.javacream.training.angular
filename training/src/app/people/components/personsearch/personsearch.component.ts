import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-personsearch',
  templateUrl: './personsearch.component.html',
  styleUrls: ['./personsearch.component.css']
})
export class PersonsearchComponent implements OnInit {

  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }
  idInput:string
  searchResult:Person | undefined
  searchPerson(){
    this.peopleService.findById(Number(this.idInput), (person) => this.searchResult = person )
  }
}
