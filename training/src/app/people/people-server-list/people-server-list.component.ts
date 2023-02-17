import { Component } from '@angular/core';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';
@Component({
  selector: 'app-people-server-list',
  templateUrl: './people-server-list.component.html',
  styleUrls: ['./people-server-list.component.css']
})
export class PeopleServerListComponent {
  people:Array<PersonIF> = []
  constructor(readonly peopleService:PeopleService){
     peopleService.findAllPeopleFromServer( (serverPeople) => {this.people = serverPeople})

  }

}
