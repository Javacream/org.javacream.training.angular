import { Component } from '@angular/core';
import { Person } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  peopleList: Array<Person>
  constructor(readonly peopleService: PeopleService){
    this.peopleList =  peopleService.people
  }



}
