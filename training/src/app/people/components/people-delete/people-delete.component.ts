import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../../schema/person';
import { PeopleService } from '../../services/people.service';
import { WhiteboardService } from '../../services/whiteboard.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-people-delete',
  templateUrl: './people-delete.component.html',
  styleUrls: ['./people-delete.component.css']
})
export class PeopleDeleteComponent implements OnInit, OnDestroy{
subscription?: Subscription
ngOnInit(): void {
  this.subscription=this.whiteboard.personSearchResult.subscribe((p) => {})
}

ngOnDestroy(): void {
  this.subscription?.unsubscribe()
}
constructor(readonly peopleService:PeopleService, readonly whiteboard: WhiteboardService){}
personId?:string
delete(){
  this.peopleService.deletePersonById(parseInt(this.personId!));
}

}
