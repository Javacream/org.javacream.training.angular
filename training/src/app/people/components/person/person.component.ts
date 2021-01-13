import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../../model/people.model';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  @Input() person:Person|undefined
  @Input() detail

delete(id:number){
  this.peopleService.deleteById(id, () => {this.deletePersonEventEmitter.emit()})
}

@Output() deletePersonEventEmitter = new EventEmitter<void>()
}
