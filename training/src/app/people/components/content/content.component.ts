import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  peopleList
  constructor(private peopleService:PeopleService) { 
    this.peopleList = peopleService.peopleList()
  }


  ngOnInit(): void {
  }

  handlePersonCreated(createdPersonId:number){
    this.peopleList = this.peopleService.peopleList()
  }

}
