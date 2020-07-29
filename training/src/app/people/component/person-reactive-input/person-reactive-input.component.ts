import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {PeopleControllerService} from '../../services/people-controller.service'

@Component({
  selector: 'app-person-reactive-input',
  templateUrl: './person-reactive-input.component.html',
  styleUrls: ['./person-reactive-input.component.css']
})
export class PersonReactiveInputComponent implements OnInit {

  constructor(readonly peopleController:PeopleControllerService) { }

  ngOnInit(): void {
  }

  personForm = new FormGroup({
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    gender: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(1)])),
    height: new FormControl('', Validators.compose([Validators.required, Validators.min(10), Validators.max(250)])),
  });
  save(){
    let person = this.personForm.value
    this.peopleController.create(person)
  }


}
