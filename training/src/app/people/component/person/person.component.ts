import { Component, Input, OnInit } from '@angular/core';
import { PeopleControllerService } from '../../controller/people-controller.service';
import { Person } from '../../model/people';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person:Person | undefined
  @Input() detail:boolean | undefined
  @Input() deleteActive = false

  constructor(readonly peopleController:PeopleControllerService) { }

  ngOnInit(): void {
  }

  deletePerson(id:number){
    this.peopleController.deleteById(id, () => {
      console.log("deleted person")
    })
  }

}
