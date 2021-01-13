import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Person } from '../../model/people.model';
import { PeopleService } from '../../people.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  peopleList:Array<Person>
  detail = true;
  detailButtonCaption = "Detail Off"
  constructor(private peopleService:PeopleService) {
    peopleService.peopleListObservable.subscribe((people) => this.peopleList = people)
    peopleService.personCreatedObservable.subscribe((person) => this.peopleService.peopleList())
    peopleService.personDeletedObservable.subscribe((person) => this.peopleService.peopleList())
    peopleService.peopleList() 
  }

  ngOnInit(): void {
  }


  switchDetail(){
    this.detail = !this.detail
    this.detailButtonCaption = this.detail?"Detail Off":"Detail On"
  }


}
