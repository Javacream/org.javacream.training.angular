import { Component } from '@angular/core';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  constructor(readonly peopleService:PeopleService){}
  lastname:string = ""
  firstname:string =""
  createdPerson?:PersonIF
  save(){
    this.createdPerson = this.peopleService.savePerson(this.lastname, this.firstname)
  }
}
