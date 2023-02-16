import { Component } from '@angular/core';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  constructor(readonly peopleService:PeopleService){}
  createdPerson?:PersonIF

  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('',Validators.compose([Validators.required, Validators.minLength(3)]))
  })
  save(){
    this.createdPerson = this.peopleService.savePerson(this.personInputForm.value.lastname!, this.personInputForm.value.firstname!)
  }
}
