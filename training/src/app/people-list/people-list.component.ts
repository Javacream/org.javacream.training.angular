import { Component, OnInit } from '@angular/core';
import {Person, PeopleModelService } from "../people-model.service"
@Component({
  selector: 'people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  people:Array<Person>
  constructor (readonly peopleModel:PeopleModelService){
    this.people = peopleModel.peopleList()
  }


  actualSortCriterium = "nop"
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

  ngOnInit() {
 
  }

  sort(){
    this.peopleModel.sort(this.actualSortCriterium)
  }
  
  delete(toDelete:Person){
    this.peopleModel.delete(toDelete)
  }

  onSelectionChange(option){
    this.actualSortCriterium = option.algorithm
  }
}
