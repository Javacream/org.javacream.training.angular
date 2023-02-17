import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WhiteboardService } from '../services/whiteboard.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy{
  constructor(readonly whiteboardService:WhiteboardService){}
  subscription?:Subscription
  action?:string
  ngOnInit(): void {
    this.subscription = this.whiteboardService.actions.subscribe((action) => this.action = action)
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }


}
