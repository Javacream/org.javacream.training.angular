import { Component, OnInit } from '@angular/core';
import { PeopleManager } from '../people-model.service';

@Component({
  selector: 'sample-person',
  templateUrl: './sample-person.component.html',
  styleUrls: ['./sample-person.component.css']
})
export class SamplePersonComponent implements OnInit {
  peopleManager: PeopleManager
  constructor(peopleManager: PeopleManager) {
    this.peopleManager = peopleManager

  }

  ngOnInit() {
  }

}
