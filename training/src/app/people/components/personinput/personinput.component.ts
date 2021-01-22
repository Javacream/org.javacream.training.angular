import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService } from '../../model/people.model';

@Component({
  selector: 'app-personinput',
  templateUrl: './personinput.component.html',
  styleUrls: ['./personinput.component.css']
})
export class PersoninputComponent implements OnInit, OnDestroy {
  subscription:Subscription
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }  
  constructor(readonly peopleService:PeopleService) { 
    this.subscription = peopleService.personCreatedSubject.subscribe((id) => this.output = `created person with id ${id}`)
  }
  ngOnInit(): void {
  }

  lastname:string
  firstname:string
  output:string
  createPerson(){
    this.peopleService.create(this.lastname, this.firstname)
  }
}
