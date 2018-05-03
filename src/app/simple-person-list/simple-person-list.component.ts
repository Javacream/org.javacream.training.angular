import { Component, OnInit } from '@angular/core';
import { PeopleManager } from '../sample-person/people';

@Component({
  selector: 'app-simple-person-list',
  templateUrl: './simple-person-list.component.html',
  styleUrls: ['./simple-person-list.component.css']
})
export class SimplePersonListComponent implements OnInit {
  peopleManager = new PeopleManager()
  constructor() { }

  ngOnInit() {
  }

}
