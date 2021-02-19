import { Component, Input, OnInit } from '@angular/core';
import { PeopleController, Person } from '../../model/people.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person:Person
  @Input() details = false
  @Input() showDelete = false
  constructor(readonly peopleController:PeopleController) { }

  ngOnInit(): void {
  }

  style=""
  decorate(){
    this.style="decorated"
  }

  delete(id:number){
    this.peopleController.deleteById(id)
  }
}
