import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleController } from '../../model/people.model';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit, OnDestroy {
  subscriptionForCreate: Subscription;
  constructor(readonly peopleController:PeopleController){
    this.subscriptionForCreate = peopleController.subjectForPersonCreation.subscribe((id) => this.newId = id)
  }
  ngOnDestroy(): void {
    this.subscriptionForCreate.unsubscribe()
  }

  ngOnInit(): void {
  }
  lastname:string
  firstname:string
  newId:number
  save(){
    this.peopleController.create(this.lastname, this.firstname)
  }
}
