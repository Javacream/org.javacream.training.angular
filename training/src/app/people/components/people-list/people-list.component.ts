import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {PeopleModel, Person} from '../../model/people.model'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people: Array<Person>
  subscriptionForPeopleList:Subscription
  constructor(readonly peopleModel:PeopleModel) { 
    this.subscriptionForPeopleList = this.peopleModel.subjectForPeopleList.subscribe((people) => this.people = people)
    peopleModel.findAllWithSubscription()
  }
  ngOnDestroy(): void {
    this.subscriptionForPeopleList.unsubscribe()
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

    //HACK
    this.people = this.peopleModel.findAll()
  }

}
