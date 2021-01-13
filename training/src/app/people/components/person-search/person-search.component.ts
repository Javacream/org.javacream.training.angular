import { Component, OnInit } from '@angular/core';
import { people } from '../../model/people.data';
import { Person } from '../../model/people.model';
import {PeopleService} from '../../people.service'
@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  searchId = 0
  person:Person | undefined

  searchPerson(){
    console.log(people)
    this.person=people.get(Number(this.searchId))
  }
}
