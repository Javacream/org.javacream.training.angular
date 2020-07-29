import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PeopleControllerService} from '../../services/people-controller.service'

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor(readonly peopleController: PeopleControllerService) { }

  ngOnInit(): void {
  }
  lastname:string = "CHANGE ME"
  firstname:string
  gender:string
  height:number
  save(){
    let person = {lastname:this.lastname, firstname:this.firstname, gender:this.gender, height: this.height}
    this.peopleController.create(person)
  }

}
