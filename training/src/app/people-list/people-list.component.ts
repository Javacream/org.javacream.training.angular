import { Component, OnInit } from '@angular/core';
import { createSamplePeople, Person } from "../people"
@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people = createSamplePeople()
  actualSortCriterium = "nop"
  sortAlgorithms:Map<string, (p1: Person, p2: Person) => number> = new Map()
  sortOptions = [
    {
      id: 1,
      description: 'by lastname',
      algorithm: "lastname"
    },
    {
      id: 2,
      description: 'by firstname',
      algorithm: "firstname"
    },
    {
      id: 3,
      description: 'by height',
      algorithm: "height"
    },
        {
      id: 4,
      description: 'none',
      algorithm: "nop"
    }


  ]

  constructor() {
  }
  ngOnInit() {
    this.sortAlgorithms["lastname"] = (p1:Person, p2:Person) => {return p1.lastname.localeCompare(p2.lastname)}
    this.sortAlgorithms["firstname"] = (p1:Person, p2:Person) => {return p1.firstname.localeCompare(p2.firstname)}
    this.sortAlgorithms["height"] = (p1:Person, p2:Person) => {return p1.height - p2.height}
    this.sortAlgorithms["nop"] = (p1:Person, p2:Person) => {return 0}

  }

  sort(){
    this.people.sort(this.sortAlgorithms[this.actualSortCriterium])
  }
  
  onSelectionChange(option){
    this.actualSortCriterium = option.algorithm
  }
}
