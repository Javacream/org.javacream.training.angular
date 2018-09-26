import { Component, OnInit } from '@angular/core';
import {Person, PeopleModelService } from "../people-model.service"


@Component({
  selector: 'sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {

  constructor (readonly peopleModel:PeopleModelService){}
  samplePerson:Person
  state=false

  ngOnInit() {
    this.samplePerson = this.peopleModel.samplePerson
  }

}

