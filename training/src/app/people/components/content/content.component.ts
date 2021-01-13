import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people.model';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  peopleList
  constructor(private peopleService:PeopleService) { 
    peopleService.peopleList(this.update)
  }


  ngOnInit(): void {
  }

  update = (people: Array<Person>) => {
    this.peopleList = people
  }
  handlePersonCreated(createdPersonId:number){
    this.peopleService.peopleList(this.update)
  }
  handlePersonDeleted(){
    this.peopleService.peopleList(this.update)
  }

}
