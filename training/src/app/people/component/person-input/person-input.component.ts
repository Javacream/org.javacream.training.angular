import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonClass, Person } from '../../model/people';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  lastname:string = "CHANGE ME"
  firstname:string
  gender:string
  height:number
  counter = 100;
  save(){
    this.counter++;
    let person = {id:this.counter, lastname:this.lastname, firstname:this.firstname, gender:this.gender, height: this.height}
    this.personEventEmitter.emit(person)
  }

  @Output() personEventEmitter = new EventEmitter<Person>()
}
