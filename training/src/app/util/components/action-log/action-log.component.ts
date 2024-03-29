import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {WhiteboardService} from '../../model/whiteboard.service'
@Component({
  selector: 'app-action-log',
  templateUrl: './action-log.component.html',
  styleUrls: ['./action-log.component.css']
})
export class ActionLogComponent implements OnInit, OnDestroy {
  lastAction:string|undefined
  actionsSubscription: Subscription
  constructor(readonly whiteboard:WhiteboardService) {
   }
  ngOnDestroy(): void {
    this.actionsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    this.actionsSubscription = this.whiteboard.actionsSubject.subscribe((action) => this.lastAction = action)
  }

}
