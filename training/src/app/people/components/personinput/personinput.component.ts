import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../model/people.model';

@Component({
  selector: 'app-personinput',
  templateUrl: './personinput.component.html',
  styleUrls: ['./personinput.component.css']
})
export class PersoninputComponent implements OnInit {

  constructor(readonly peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  lastname:string
  firstname:string
  output:string
  createPerson(){
    this.peopleService.create(this.lastname, this.firstname, (id) => this.output = `created person with id ${id}`)
  }
}
