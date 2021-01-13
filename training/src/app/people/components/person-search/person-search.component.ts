import { Component, OnInit } from '@angular/core';
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
    this.person=this.peopleService.findById(Number(this.searchId))
  }
}
