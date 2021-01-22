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

     peopleService.findAll((people) => this.peopleList = people)
  }

  ngOnInit(): void {
  }
  detail = false
  switchDetail(){
    this.detail = !this.detail
  }

}
