import { Component } from '@angular/core';
import { ConfigService } from '../config-service';
import { PersonComponent } from '../person-component/person-component';
import { WhiteboardService } from '../whiteboard-service';
import { Person } from '../person';

@Component({
  selector: 'app-header',
  imports: [PersonComponent],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  user?: Person
  constructor(readonly config: ConfigService, readonly whiteboardService: WhiteboardService){
    
    whiteboardService.userAuthenticated.subscribe((user:Person) => {
      this.user = user
    })
  }
}
