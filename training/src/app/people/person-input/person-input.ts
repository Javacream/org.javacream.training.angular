import { Component } from '@angular/core';
import { PeopleService } from '../people-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-person-input',
  imports: [FormsModule],
  templateUrl: './person-input.html',
  styleUrl: './person-input.css'
})
export class PersonInput {
  constructor(readonly peopleService: PeopleService){}

  id?:number
  firstname?:string
  lastname?: string

  savePerson(){
  	this.peopleService.people.push({
      id: Number(this.id!), firstname: this.firstname!, lastname: this.lastname!})
    console.log('***************')
    }
}