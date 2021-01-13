import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Person } from '../../model/people.model';
import { PeopleService } from '../../people.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  @Input() peopleList:Array<Person>
  detail = true;
  detailButtonCaption = "Detail Off"
  constructor() {
   }

  ngOnInit(): void {
  }


  switchDetail(){
    this.detail = !this.detail
    this.detailButtonCaption = this.detail?"Detail Off":"Detail On"
  }

  @Output() handlePersonDeletionEventEmitter = new EventEmitter<void>()
  handlePersonDeletion(){
    this.handlePersonDeletionEventEmitter.emit()
  }

}
