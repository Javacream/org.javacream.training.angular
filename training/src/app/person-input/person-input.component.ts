import { Component, OnInit } from '@angular/core';
import {Person} from '../people'
@Component({
  selector: 'person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  person: Person = {lastname:"", firstname:"", gender:"", height:0}
  result:string = "Result: "
  constructor() { }

  ngOnInit() {
  }

  save(){
    this.result = "Saved " + this.person.firstname + " " + this.person.lastname
  }
}
