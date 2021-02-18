import { Component, OnInit } from '@angular/core';
import { PeopleModel } from '../../model/people.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {
  constructor(readonly peopleModel:PeopleModel){}

  ngOnInit(): void {
  }
  lastname:string
  firstname:string
  newId:number
  save(){
    this.newId= this.peopleModel.create(this.lastname, this.firstname)
  }
}
