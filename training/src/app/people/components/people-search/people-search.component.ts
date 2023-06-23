import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../schema/person';
import { PeopleService } from '../../services/people.service';
import { WhiteboardService } from '../../services/whiteboard.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit, OnDestroy{
    subscription?: Subscription
  ngOnInit(): void {
    this.subscription=this.whiteboard.personSearchResult.subscribe((p) => this.person = p)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  constructor(readonly peopleService:PeopleService, readonly whiteboard: WhiteboardService){}
  personId?:string
  person?:Person
  search(){
    this.peopleService.findPersonById(parseInt(this.personId!));
  }

}
