import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms'
import { Person } from '../person_class';
import { PeopleService } from '../people-service';
import { PersonComponent } from '../person-component/person-component';
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.html',
  styleUrls: ['./person-input.css'],
  imports: [ReactiveFormsModule, PersonComponent],
  
})
export class PersonInput {

  constructor(readonly peopleService: PeopleService){}
  createdPerson?:Person

  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
  })
  savePerson(){
    let nextId = this.peopleService.people.length + 1
    this.createdPerson = {id: nextId, lastname: this.personInputForm.value.lastname!, firstname: this.personInputForm.value.firstname!}
    this.peopleService.people.push(this.createdPerson)
  }
}