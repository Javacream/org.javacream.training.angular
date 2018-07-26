import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Person} from '../people-model.service'
@Component({
  selector: 'app-simple-person-detail',
  templateUrl: './simple-person-detail.component.html',
  styleUrls: ['./simple-person-detail.component.css']
})
export class SimplePersonDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() person: Person
  @Input() state: boolean
  @Input() index: number

  @Output() deleteEventEmitter = new EventEmitter<number>()

  delete(){
    this.deleteEventEmitter.emit(this.index)
  }
}
