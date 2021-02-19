import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleController } from 'src/app/people/model/people.model';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {
  lastAction = ""
  subscriptionForLastAction: Subscription;
  constructor(readonly peopleModel:PeopleController){
    this.subscriptionForLastAction = peopleModel.subjectForLastAction.subscribe((action) => this.lastAction = action)
  }
  ngOnDestroy(): void {
    this.subscriptionForLastAction.unsubscribe()
  } 

  ngOnInit(): void {
  }

}
