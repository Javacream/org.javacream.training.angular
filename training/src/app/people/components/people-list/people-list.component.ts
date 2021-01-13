import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../people.service';
@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  detail = true;
  detailButtonCaption = "Detail Off"
  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  peopleList = this.peopleService.peopleList()

  switchDetail(){
    this.detail = !this.detail
    this.detailButtonCaption = this.detail?"Detail Off":"Detail On"
  }

}
