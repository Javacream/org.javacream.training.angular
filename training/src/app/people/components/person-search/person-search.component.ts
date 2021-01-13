import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/people.model';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css']
})
export class PersonSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  searchId = 0
  person:Person | undefined

  searchPerson(){
    //TODO: people durchsuchen und gegebenfalls Treffer der this.person zuweisen
    this.person={id:this.searchId, lastname:"Sawitzki", firstname:"Rainer", gender:"m", height:183}

  }
}
