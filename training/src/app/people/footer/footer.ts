import { Component } from '@angular/core';
import { ConfigService } from '../config-service';
import { WhiteboardService } from '../whiteboard-service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  constructor(readonly config: ConfigService, readonly whiteboardService: WhiteboardService){
    whiteboardService.personCreated.subscribe((id) => {
      console.log('******************** ' + id)
    })
  }
}
