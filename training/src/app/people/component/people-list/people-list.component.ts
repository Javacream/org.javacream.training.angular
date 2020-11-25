import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../model/people';
import {subscribe, unsubscribe} from 'pubsub-js'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  @Input() people:Array<Person>
  detail = true
  buttonCaption = "Detail off"
  subscriptionId:string
  constructor() { }

  ngOnInit(): void {
    this.subscriptionId = subscribe("person.created", this.handlePersonCreated)
  }

  ngOnDestroy(): void {
    unsubscribe(this.subscriptionId)
  }

  switchDetail(){
    this.detail = !this.detail;
    this.buttonCaption = this.detail ? "Detail Off" : "Detail On"
  }

  handlePersonCreated(topic:string, data:any){
    console.log("retceived event")
  }
}
