import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {PeopleController, Person} from '../../model/people.model'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people: Array<Person>
  subscriptionForPeopleList:Subscription
  subscriptionForPersonDelete:Subscription
  subscriptionForPersonCreate:Subscription
  subscriptionForPersonUpdate:Subscription
  constructor(readonly peopleController:PeopleController) { 
    this.subscriptionForPeopleList = this.peopleController.subjectForPeopleList.subscribe((people) => this.people = people)
    this.subscriptionForPersonCreate = this.peopleController.subjectForPersonCreation.subscribe(this.refresh)
    this.subscriptionForPersonDelete = this.peopleController.subjectForPersonDeletion.subscribe(this.refresh)
    this.subscriptionForPersonUpdate = this.peopleController.subjectForPersonUpdate.subscribe(this.refresh)
    peopleController.findAll()
  }
  ngOnDestroy(): void {
    this.subscriptionForPeopleList.unsubscribe()
    this.subscriptionForPersonCreate.unsubscribe()
    this.subscriptionForPersonDelete.unsubscribe()
    this.subscriptionForPersonUpdate.unsubscribe()
  }

  ngOnInit(): void {
  }

  details=true
  buttonCaption = "Details Off"
  switchDetail(){
    this.details = !this.details
    if (this.details){
      this.buttonCaption = "Details Off"
    }else{
      this.buttonCaption = "Details On"
    }
  }

  refresh = (p:any) => {
    this.peopleController.findAll()
  }
}
