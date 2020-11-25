import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleModel, Person } from '../../model/people';
import {subscribe, unsubscribe} from 'pubsub-js'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  people:Array<Person>
  detail = true
  buttonCaption = "Detail off"
  subscriptionIdCreate:string | undefined
  subscriptionIdDelete:string | undefined
  subscriptionIdUpdate:string | undefined
  constructor(readonly peopleModel:PeopleModel){
    this.people = peopleModel.findAll()
  }

  ngOnInit(): void {
    this.subscriptionIdCreate = subscribe("person.create", this.handlePersonCreated)
    this.subscriptionIdDelete = subscribe("person.delete", this.handlePersonCreated)
    this.subscriptionIdUpdate = subscribe("person.update", this.handlePersonCreated)
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptionIdCreate)
    unsubscribe(this.subscriptionIdDelete)
    unsubscribe(this.subscriptionIdUpdate)
  }

  switchDetail(){
    this.detail = !this.detail;
    this.buttonCaption = this.detail ? "Detail Off" : "Detail On"
  }

  //Diese Funktion wird als Callback der Subscription verwendet und muss deshalb als TypeSxript Arrow-Funktion formuliert werden
  handlePersonCreated = (topic:string, data:any) =>{
    this.people = this.peopleModel.findAll()
  }
}
