import { Component } from '@angular/core';
import { PersonIF } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent {
  constructor(readonly peopleService:PeopleService){}
  id:string = ""
  searchResult?:PersonIF

  search(){
    this.searchResult = this.peopleService.findPersonById(parseInt(this.id))
  }
}
