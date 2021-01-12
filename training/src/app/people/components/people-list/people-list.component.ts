import { Component, OnInit } from '@angular/core';
import {people} from '../../model/people.data'
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  detail = true;
  detailButtonCaption = "Detail Off"
  constructor() { }

  ngOnInit(): void {
  }

  peopleList = Array.from(people.values())

  switchDetail(){
    this.detail = !this.detail
    this.detailButtonCaption = this.detail?"Detail Off":"Detail On"
  }

}
