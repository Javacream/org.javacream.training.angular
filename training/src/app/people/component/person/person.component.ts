import { Component, Input, OnInit } from '@angular/core';
import { PeopleModel, Person } from '../../model/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person:Person | undefined
  @Input() detail:boolean | undefined
  @Input() deleteActive = false

  constructor(readonly peopleModel:PeopleModel) { }

  ngOnInit(): void {
  }

  deletePerson(id:number){
    this.peopleModel.delete(id)
  }

}
