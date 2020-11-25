import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people';
import {PeopleControllerService} from '../../controller/people-controller.service'
@Component({
  selector: 'app-people-server-list',
  templateUrl: './people-server-list.component.html',
  styleUrls: ['./people-server-list.component.css']
})
export class PeopleServerListComponent implements OnInit {
  people: Array<Person> | undefined
  constructor(readonly controller: PeopleControllerService) { }

  async ngOnInit(){
    //this.people = await this.controller.findAllPeopleAsyncAwait()
    this.controller.findAllPeopleObserver(this.handlePeopleUpdate)
  }

  handlePeopleUpdate = (people: Array<Person>) => {
    this.people = people
  }

}
