import { Component, Input, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person:Person
  @Input() details = false
  @Input() showDelete = false

  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  delete(id:number){
    this.peopleService.deleteById(id)
  }
}
