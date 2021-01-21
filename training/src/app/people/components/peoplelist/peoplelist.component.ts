import { Component, OnInit } from '@angular/core';
import { PeopleController, Person } from '../../model/people.model';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {

  peopleList:Array<Person>
  constructor() { 

    let peopleController:PeopleController = new PeopleController()
    this.peopleList = peopleController.findAll()
  }

  ngOnInit(): void {
  }


}
