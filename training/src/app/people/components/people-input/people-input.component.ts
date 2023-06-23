import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../schema/person';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { WhiteboardService } from '../../services/whiteboard.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})
export class PeopleInputComponent implements OnInit, OnDestroy{

  constructor(readonly peopleService: PeopleService, readonly whiteboard:WhiteboardService){
  }
  createdPerson?:Person
  subscription?: Subscription
  ngOnInit(): void {
    this.subscription=this.whiteboard.personCreated.subscribe((p:Person) => this.createdPerson = p)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
  })
  save(){
    this.peopleService.createPerson(this.personInputForm.value.lastname!, this.personInputForm.value.firstname!)
  }
}
