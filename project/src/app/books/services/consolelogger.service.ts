import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { WhiteboardService } from '../books/services/whiteboard.service';

@Injectable({
  providedIn: 'root'
})

export class ConsoleloggerService{
  subscription: Subscription
  constructor(readonly whiteboard: WhiteboardService) {
    this.subscription = this.whiteboard.bookCreation.subscribe(console.log)
   }

}
