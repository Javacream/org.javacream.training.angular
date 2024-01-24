import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.css'
})
export class PeopleInputComponent {
  personInputForm = new FormGroup({
    lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
    firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]))

  })
  constructor(readonly peopleService:PeopleService){}
  save(){
    let created = this.peopleService.create(this.personInputForm.value.lastname!, this.personInputForm.value.firstname!)
  }

}
