import { Component, OnInit } from '@angular/core';
import { PeopleModel, Person } from '../../model/people.model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {
  searchResult:Person | undefined
  searchId:number | undefined
  constructor(readonly peopleModel:PeopleModel) { }

  ngOnInit(): void {
  }
  search(){
    this.searchResult = this.peopleModel.findById(Number(this.searchId))
  }
}
