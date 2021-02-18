import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleModel } from '../../model/people.model';

@Component({
  selector: 'app-person-create-reactive',
  templateUrl: './person-create-reactive.component.html',
  styleUrls: ['./person-create-reactive.component.css']
})
export class PersonCreateReactiveComponent implements OnInit {
  newId:number
  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
  }


  )
  constructor(readonly peopleModel:PeopleModel) { }

  ngOnInit(): void {
  }
save(){
  const lastname = this.personInputForm.value.lastname
  const firstname = this.personInputForm.value.firstname
  this.newId = this.peopleModel.create(lastname, firstname)
}
}
