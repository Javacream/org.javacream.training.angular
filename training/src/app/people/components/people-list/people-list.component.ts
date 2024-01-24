import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';
import { PersonComponent } from '../person/person.component';
import { CommonModule } from '@angular/common';
import { WhiteboardService } from '../../../util/services/whiteboard.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [PersonComponent, CommonModule],
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  peopleList:Array<Person>
  constructor(readonly peopleService:PeopleService, readonly whiteBoardService: WhiteboardService){
    this.peopleList = peopleService.findAll()
    //whiteBoardService.personCreated_channel.subscribe(this.handlePersonCreated)
    //this.handlePersonCreated = this.handlePersonCreated.bind(this)
    whiteBoardService.personCreated_channel.subscribe(p => this.peopleList = this.peopleService.findAll())
  }
  handlePersonCreatedNotWorking(p:Person){
    this.peopleList = this.peopleService.findAll()
  }
  handlePersonCreated = (p:Person) => {
    this.peopleList = this.peopleService.findAll()
  }

}
