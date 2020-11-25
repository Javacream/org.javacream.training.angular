import { Component, OnInit, Output } from '@angular/core';
import { PeopleModel } from '../../model/people';
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  //@Output() personEventEmitter = new EventEmitter<number>()
  constructor(readonly peopleModel:PeopleModel) { }

  ngOnInit(): void {
  }

  lastname = ""
  firstname = ""

  save(){
    let id = this.peopleModel.create(this.lastname, this. firstname)
    //this.personEventEmitter.emit(id)
  }

}
