import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person: Person
  constructor(readonly peopleService:PeopleService){
    this.person = peopleService.getUser()
  }

}
