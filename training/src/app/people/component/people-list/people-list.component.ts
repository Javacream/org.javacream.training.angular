import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../../model/people';
import {PeopleControllerService} from '../../services/people-controller.service'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:Map<Number, Person>
  constructor(readonly peopleController: PeopleControllerService) { }

  ngOnInit(): void {
    this.people = this.peopleController.peopleMap()
  }

  peopleList():Array<Person>{
    return Array.from(this.people.values());
  }
}
