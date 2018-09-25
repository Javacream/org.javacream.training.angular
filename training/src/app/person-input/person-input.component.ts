import { Component, OnInit } from '@angular/core';
import {Person, PeopleModelService } from "../people-model.service"

@Component({
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  person: Person = {lastname:"", firstname:"", gender:"", height:0}
  constructor (readonly peopleModel:PeopleModelService){}

  ngOnInit() {
  }

  save(){
    this.peopleModel.save(Object.assign({}, this.person))
  }
}
