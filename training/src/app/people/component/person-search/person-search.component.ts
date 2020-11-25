import { Component, OnInit } from '@angular/core';
import { PeopleControllerService } from '../../controller/people-controller.service';
import {Person } from '../../model/people';
@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  id:number|undefined
  person:Person | undefined
  constructor(readonly peopleController:PeopleControllerService) { }

  ngOnInit(): void {
  }

  search(){
   this.peopleController.findById(Number(this.id), (person:Person) => {
     this.person = person
   });
  }

}
