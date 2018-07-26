import { Component, OnInit } from '@angular/core';
import { PeopleManager, Person } from '../people-model.service';

@Component({
  selector: 'app-simple-person-list',
  templateUrl: './simple-person-list.component.html',
  styleUrls: ['./simple-person-list.component.css']
})
export class SimplePersonListComponent implements OnInit {
  peopleManager: PeopleManager
  constructor(peopleManager: PeopleManager) {
    this.peopleManager = peopleManager
    peopleManager.subscribePersonObserver(this.update)
  }
  ngOnInit() {
  }

  remove(index: number){
    this.peopleManager.remove(index)
  }

  update = (person:Person) => {
    console.log("*********")
  }
}
