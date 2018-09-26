import { Component, OnInit, Input } from '@angular/core';
import {Person, PeopleModelService} from '../people-model.service'
@Component({
  selector: 'person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  constructor (readonly peopleModel:PeopleModelService){}
  @Input() person:Person
  @Input() state:Boolean

  delete(toDelete:Person){
    this.peopleModel.delete(toDelete)
  }
  ngOnInit() {
  }

}
