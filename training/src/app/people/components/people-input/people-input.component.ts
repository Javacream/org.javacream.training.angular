import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.css'
})
export class PeopleInputComponent {
  inputLastname:string = ''
  inputFirstname:string = ''

  constructor(readonly peopleService:PeopleService){}
  save(){
    console.log("save action, lastname=" + this.inputLastname + ", firstname=" + this.inputFirstname)
    this.peopleService.create(this.inputLastname, this.inputFirstname)
  }

}
