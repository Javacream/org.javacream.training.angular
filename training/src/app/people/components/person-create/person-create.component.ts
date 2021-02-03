import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PeopleService } from '../../model/people.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit, OnDestroy {
  constructor(readonly peopleService:PeopleService) { }
  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

  personInputForm = new FormGroup(
    {
      lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
    }
  )
  save(){
    const lastname = this.personInputForm.value.lastname
    const firstname = this.personInputForm.value.firstname
    this.peopleService.create(lastname, firstname)
  }

}
