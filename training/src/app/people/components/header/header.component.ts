import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { PersonComponent } from '../person/person.component';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';
import { WhiteboardService } from '../../../util/services/whiteboard.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy{
  user?:Person
  subscription?:Subscription
  constructor(readonly configService:ConfigService, readonly peopleService:PeopleService, readonly whiteboardService:WhiteboardService ){
    peopleService.getUser()
  }

  ngOnInit(): void {
    this.subscription = this.whiteboardService.user_channel.subscribe(user => this.user = user)
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()    
  }
}
