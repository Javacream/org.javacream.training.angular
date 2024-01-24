import { Component, OnDestroy, OnInit } from '@angular/core';
import { WhiteboardService } from '../../services/whiteboard.service';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit, OnDestroy{
  ngOnDestroy(): void {
    this.subscription!.unsubscribe()
  }
  ngOnInit(): void {
    this.subscription = this.whiteboardService.logs_channel.subscribe(log => this.log = log)
  }
  log:string=''
  subscription?:Subscription
  constructor(readonly whiteboardService:WhiteboardService){}

}
