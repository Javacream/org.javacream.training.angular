import { Component, OnDestroy, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';
import { PersonComponent } from '../person/person.component';
import { CommonModule } from '@angular/common';
import { WhiteboardService } from '../../../util/services/whiteboard.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent implements OnInit, OnDestroy {
  peopleList:Array<Person>
  personCreatedSubscription?:Subscription
  constructor(readonly peopleService:PeopleService, readonly whiteBoardService: WhiteboardService){
    this.peopleList = peopleService.findAll()
  }

  ngOnInit(): void {
    this.personCreatedSubscription = this.whiteBoardService.personCreated_channel.subscribe(p => this.peopleList = this.peopleService.findAll())
    
  }

  ngOnDestroy(): void {
    this.personCreatedSubscription!.unsubscribe()
  }

}
