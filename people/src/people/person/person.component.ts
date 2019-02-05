import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Person } from 'src/model/people';
@Component({
  selector: 'people-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() person: Person;
  @Input() canDelete: boolean;
  @Output() removeEventEmitter;
  constructor() {
    this.removeEventEmitter = new EventEmitter<number>();
   }

  ngOnInit() {
  }

  removeAction(index: number) {
    this.removeEventEmitter.emit(index);
  }

}
