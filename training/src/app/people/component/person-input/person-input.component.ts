import { Component, OnInit, Output } from '@angular/core';
import { PeopleControllerService } from '../../controller/people-controller.service';
@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent implements OnInit {
  constructor(readonly peopleController:PeopleControllerService) { }

  ngOnInit(): void {
  }

  lastname = ""
  firstname = ""

  save(){
    let id = this.peopleController.create(this.lastname, this. firstname, () => {
      console.log("created person")
    })
  }

}
