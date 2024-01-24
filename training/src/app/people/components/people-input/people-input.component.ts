import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../services/people.service';
import { WhiteboardService } from '../../../util/services/whiteboard.service';

@Component({
  selector: 'app-people-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.css'
})
export class PeopleInputComponent {
  inputLastname:string = ''
  inputFirstname:string = ''

  constructor(readonly peopleService:PeopleService, readonly whiteBoardService:WhiteboardService){}
  save(){
    console.log("save action, lastname=" + this.inputLastname + ", firstname=" + this.inputFirstname)
    let created = this.peopleService.create(this.inputLastname, this.inputFirstname)
    this.whiteBoardService.personCreated_channel.next(created)
  }

}
