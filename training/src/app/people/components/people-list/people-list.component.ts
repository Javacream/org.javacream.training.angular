import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../schema/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent {  
  
  peopleList: Array<Person>
  constructor(readonly peopleService:PeopleService){
    this.peopleList = Array.from(peopleService.peopleMap.values())

  }
}
