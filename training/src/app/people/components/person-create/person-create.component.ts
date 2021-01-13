import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PeopleService } from '../../people.service';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  constructor(private peopleService:PeopleService) { }

  ngOnInit(): void {
  }

  lastname:string
  firstname:string

  save(){
    this.peopleService.create(this.lastname, this.firstname, (newId:number) => {
      this.createdPersonEventEmitter.emit(newId)
    })
  }


  @Output() createdPersonEventEmitter = new EventEmitter<number>()
}
