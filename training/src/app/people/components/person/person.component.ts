import { Component, Input, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  @Input() person:Person | undefined
  @Input() detail = false
  @Input() deleteEnabled = false

  delete(id:number){
    this.peopleService.deleteById(id, () => {})
  }
}
