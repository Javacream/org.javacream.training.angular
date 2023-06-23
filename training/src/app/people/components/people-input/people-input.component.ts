import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../schema/person';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { WhiteboardService } from '../../services/whiteboard.service';
@Component({
  selector: 'app-people-input',
  templateUrl: './people-input.component.html',
  styleUrls: ['./people-input.component.css']
})
export class PeopleInputComponent {

  constructor(readonly peopleService: PeopleService, readonly whiteboard:WhiteboardService){
    this.whiteboard.personCreated.subscribe(this.handlePersonCreated)
    this.whiteboard.personCreated.subscribe((id:number) => //...))
  }
  createdPerson?:Person

  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
  })
  save(){
    this.peopleService.createPerson(this.personInputForm.value.lastname!, this.personInputForm.value.firstname!)
    //this.createdPerson = this.peopleService.findPersonById(id)
  }
  //So nicht als Subscription-Funktion geeignet, this ist nicht eine Instanz der Component
  handlePersonCreatedWrong(id:number){
    console.log("created person: " + id + ", " + this)
  }

  handlePersonCreated = (id:number) => {
    console.log("created person: " + id + ", " + this)
  }

}
