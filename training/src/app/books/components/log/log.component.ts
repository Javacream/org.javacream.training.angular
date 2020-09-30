import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {whiteboard} from '../../../whiteboard'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
 
  message: string

  subscription:Subscription
  constructor(){} 

  ngOnInit(): void {
    this.subscription = whiteboard.log.subscribe((logMessage:string) => {
      this.message = logMessage;
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


}

