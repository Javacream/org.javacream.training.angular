import { Component, OnInit } from '@angular/core';
import { peopleModel, Person } from '../../model/people';
@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  id:number
  person:Person | undefined
  constructor() { }

  ngOnInit(): void {
  }

  search(){
   this.person = peopleModel.findById(Number(this.id));
  }

}
