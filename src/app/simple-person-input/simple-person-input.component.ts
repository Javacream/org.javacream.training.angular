import { Component, OnInit } from '@angular/core';
import { PeopleManager } from '../people-model.service';

@Component({
  selector: 'app-simple-person-input',
  templateUrl: './simple-person-input.component.html',
  styleUrls: ['./simple-person-input.component.css']
})
export class SimplePersonInputComponent implements OnInit {
  person_input: any = {}
  peopleManager: PeopleManager
  constructor(peopleManager: PeopleManager) {
    this.peopleManager = peopleManager

  }
  ngOnInit() {
  }
  save(){
    this.peopleManager.save(this.person_input)
    this.person_input = {}
  }
  dump(){
    this.peopleManager.people.forEach((element, index) => console.log(`${index} ${element.lastname} ${element.firstname} ${element.height} ${element.gender}`))
  }
  keyUp(value:string){
    console.log("typed key, actual input = " + value)
  }
}
