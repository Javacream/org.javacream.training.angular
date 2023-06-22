import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../schema/person';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})
export class PeopleInputComponent {

  constructor(readonly peopleService: PeopleService){}
  createdPerson?:Person

  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
  })
  save(){
    let id = this.peopleService.createPerson(this.personInputForm.value.lastname!, this.personInputForm.value.firstname!)
    this.createdPerson = this.peopleService.findPersonById(id)
  }
}
