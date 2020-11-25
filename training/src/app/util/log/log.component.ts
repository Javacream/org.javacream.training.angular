import { Component, OnInit, OnDestroy } from '@angular/core';
import {subscribe, unsubscribe} from 'pubsub-js'
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {
  subscription:string|undefined
  lastAction = ""
  constructor() { }
  ngOnDestroy(): void {
    unsubscribe(this.subscription)
  }

  ngOnInit(): void {
    this.subscription=subscribe("person", this.handlePersonEvent)
  }

  handlePersonEvent = (message:string, data:any) => {
    this.lastAction = message
  }

}
