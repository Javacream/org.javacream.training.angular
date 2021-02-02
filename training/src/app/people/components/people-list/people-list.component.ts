import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peopleList:Array<Person>
  showPersonDetail = true
  constructor(readonly peopleService:PeopleService) {
    this.peopleList = peopleService.findAll()
   }

  ngOnInit(): void {
  }
  switchDetails(){
    this.showPersonDetail = !this.showPersonDetail
    this.peopleList = this.peopleService.findAll()
  }
}
