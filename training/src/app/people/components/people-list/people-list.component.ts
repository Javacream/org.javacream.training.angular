import { Component, OnInit } from '@angular/core';
import {PeopleModel, Person} from '../../model/people.model'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people: Array<Person>
  constructor(readonly peopleModel:PeopleModel) { 
    this.people = peopleModel.findAll()
  }

  ngOnInit(): void {
  }

}
