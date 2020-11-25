import { Component, OnInit, Output } from '@angular/core';
import { peopleModel } from '../../model/people';
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  //@Output() personEventEmitter = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  lastname:string
  firstname:string

  save(){
    let id = peopleModel.create(this.lastname, this. firstname)
    //this.personEventEmitter.emit(id)
  }

}
