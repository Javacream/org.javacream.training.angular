import { Component } from '@angular/core';
import { Person } from '../../schema/person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent {
  constructor(readonly peopleService:PeopleService){}
  personId?:string
  person?:Person
  search(){
    this.person = this.peopleService.findPersonById(parseInt(this.personId!));
  }

}
