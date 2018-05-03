import { Component, OnInit } from '@angular/core';
import { PeopleManager } from './people';

@Component({
  selector: 'sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {
  peopleManager: PeopleManager
  constructor() { }

  ngOnInit() {
    this.peopleManager = new PeopleManager()
  }

}
