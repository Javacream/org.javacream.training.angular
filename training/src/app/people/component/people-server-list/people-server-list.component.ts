import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../../model/people';
import {PeopleControllerService} from '../../controller/people-controller.service'
import {subscribe, unsubscribe} from 'pubsub-js'
@Component({
  selector: 'app-people-server-list',
  templateUrl: './people-server-list.component.html',
  styleUrls: ['./people-server-list.component.css']
})
export class PeopleServerListComponent implements OnInit, OnDestroy {
  people: Array<Person> | undefined
  subscriptionIdCreate:string | undefined
  subscriptionIdDelete:string | undefined
  subscriptionIdUpdate:string | undefined
  constructor(readonly controller: PeopleControllerService) { }

  async ngOnInit(){
    this.controller.findAllPeopleObserver(this.handlePeopleUpdate)
    this.subscriptionIdCreate = subscribe("person.create", this.handlePersonCreated)
    this.subscriptionIdDelete = subscribe("person.delete", this.handlePersonCreated)
    this.subscriptionIdUpdate = subscribe("person.update", this.handlePersonCreated)
  }
  ngOnDestroy(): void {
    unsubscribe(this.subscriptionIdCreate)
    unsubscribe(this.subscriptionIdDelete)
    unsubscribe(this.subscriptionIdUpdate)
  }


  handlePeopleUpdate = (people: Array<Person>) => {
    this.people = people
  }
  handlePersonCreated = (topic:string, data:any) =>{
    this.controller.findAllPeopleObserver(this.handlePeopleUpdate)
  }
}
