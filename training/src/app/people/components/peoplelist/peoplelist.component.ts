import { Component, OnInit } from '@angular/core';
import { PeopleService, Person } from '../../model/people.model';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.css']
})
export class PeoplelistComponent implements OnInit {

  peopleList:Array<Person>
  constructor(private peopleService:PeopleService) { 

    this.peopleList = peopleService.findAll()
  }

  ngOnInit(): void {
  }
  detail = false
  switchDetail(){
    this.detail = !this.detail
  }

}
