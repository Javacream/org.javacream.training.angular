import { Component, OnInit, Input } from '@angular/core';
import {user, samplePeople} from '../../../ApplicationContext'

@Component({
  selector: 'app-people-content',
  templateUrl: './people-content.component.html',
  styleUrls: ['./people-content.component.css']
})
export class PeopleContentComponent implements OnInit {
  @Input() company:string
  person=user
  people=samplePeople
  constructor() { }

  ngOnInit(): void {
    console.log(this.company)
  }

  clicked(event:Event){
    console.log("clicked on button" + event.currentTarget)
  }

  handlePerson(personData){
    samplePeople.push(personData)
  }
}
