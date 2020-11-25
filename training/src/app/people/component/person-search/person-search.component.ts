import { Component, OnInit } from '@angular/core';
import {PeopleModel, Person } from '../../model/people';
@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  id:number|undefined
  person:Person | undefined
  constructor(readonly peopleModel:PeopleModel) { }

  ngOnInit(): void {
  }

  search(){
   this.person = this.peopleModel.findById(Number(this.id));
  }

}
