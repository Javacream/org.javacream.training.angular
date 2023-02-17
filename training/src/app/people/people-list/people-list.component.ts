import { Component } from '@angular/core';
import { WhiteboardService } from 'src/app/util/services/whiteboard.service';
import { Person } from '../model/people.model';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  peopleList: Array<Person>
  constructor(readonly peopleService: PeopleService, readonly whiteboard:WhiteboardService){
    this.peopleList =  Array.from(peopleService.people.values())
    //this.update = this.update.bind(this) 
    //whiteboard.demo.subscribe(this.update)
    whiteboard.demo.subscribe( (id) => {
      console.log(id)
      this.peopleList =  Array.from(peopleService.people.values())
   })
  }

//  update(){
//    console.log("handle notification")
//    this.peopleList =  Array.from(this.peopleService.people.values())
//  }

//  update = () => {
//    console.log("handle notification")
//    this.peopleList =  Array.from(this.peopleService.people.values())
//  }


}
