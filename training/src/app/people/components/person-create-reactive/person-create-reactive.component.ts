import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PeopleController } from '../../model/people.model';

@Component({
  selector: 'app-person-create-reactive',
  templateUrl: './person-create-reactive.component.html',
  styleUrls: ['./person-create-reactive.component.css']
})
export class PersonCreateReactiveComponent implements OnInit, OnDestroy {
  subscriptionForCreate: Subscription;
  constructor(readonly peopleController:PeopleController){
    this.subscriptionForCreate = peopleController.subjectForPersonCreation.subscribe((id) => this.newId = id)
  }
  ngOnDestroy(): void {
    this.subscriptionForCreate.unsubscribe()
  } 
  newId:number
  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)]))
  }


  )

  ngOnInit(): void {
  }
save(){
  const lastname = this.personInputForm.value.lastname
  const firstname = this.personInputForm.value.firstname
  this.peopleController.create(lastname, firstname)
}
}
