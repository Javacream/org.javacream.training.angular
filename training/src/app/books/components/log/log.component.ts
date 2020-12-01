import { Component, OnInit } from '@angular/core';
import { WhiteboardService } from '../../services/whiteboard.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  subscription: Subscription
  message: string
  registrationToken:string
  constructor(readonly whiteboard:WhiteboardService){} 

  ngOnInit(): void {
    this.subscription = this.whiteboard.log.subscribe(this.updateLog)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  updateLog = (logMessage) => {
    this.message = logMessage;
  }

}

