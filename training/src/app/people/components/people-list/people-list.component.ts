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
  peopleList?:Array<Person>
  peopleChangeSubscription?:Subscription
  peopleSubscription?:Subscription
  
  constructor(readonly peopleService:PeopleService, readonly whiteBoardService: WhiteboardService){}

  ngOnInit(): void {
    this.peopleService.findAll()
    this.peopleChangeSubscription = this.whiteBoardService.peopleChanged_channel.subscribe(p => this.peopleService.findAll())
    this.peopleSubscription = this.whiteBoardService.people_channel.subscribe(people => this.peopleList = people)
    
  }

  ngOnDestroy(): void {
    this.peopleChangeSubscription!.unsubscribe()
    this.peopleSubscription!.unsubscribe()
  }

}
