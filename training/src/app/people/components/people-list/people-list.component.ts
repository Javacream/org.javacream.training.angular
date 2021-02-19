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
  constructor(readonly peopleController:PeopleController) { 
    this.subscriptionForPeopleList = this.peopleController.subjectForPeopleList.subscribe((people) => this.people = people)
    this.subscriptionForPersonCreate = this.peopleController.subjectForPersonCreation.subscribe((id) => peopleController.findAll())
    this.subscriptionForPersonDelete = this.peopleController.subjectForPersonDeletion.subscribe((id) => peopleController.findAll())
    peopleController.findAll()
  }
  ngOnDestroy(): void {
    this.subscriptionForPeopleList.unsubscribe()
    this.subscriptionForPersonCreate.unsubscribe()
    this.subscriptionForPersonDelete.unsubscribe()
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

}
