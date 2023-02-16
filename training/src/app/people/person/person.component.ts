import { Component, Input } from '@angular/core';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  constructor(readonly peopleService: PeopleService){

  }
  @Input() person?:PersonIF
  @Input() detail = false
  delete(id: number){
    this.peopleService.deletePersonById(id)
  }
}
