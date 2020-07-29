import { Component, OnInit, OnDestroy } from '@angular/core';
import {NotificationService} from '../../../people/services/notification.service' 

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  message: string
  registrationToken:string
  constructor(readonly notificationService:NotificationService){} 

  ngOnInit(): void {
    this.registrationToken = this.notificationService.register("people", this.updateLog)
  }
  ngOnDestroy(): void {
    this.notificationService.unregister(this.registrationToken)
  }

  updateLog = (topic:string, logMessage) => {
    this.message = logMessage;
  }

}
