import { Component, OnInit } from '@angular/core';
import { PeopleManager } from '../people-model.service';

@Component({
  selector: 'app-simple-person-list',
  templateUrl: './simple-person-list.component.html',
  styleUrls: ['./simple-person-list.component.css']
})
export class SimplePersonListComponent implements OnInit {
  peopleManager: PeopleManager
  constructor(peopleManager: PeopleManager) {
    this.peopleManager = peopleManager

  }
  ngOnInit() {
  }

  remove(index: number){
    this.peopleManager.remove(index)
  }
}
