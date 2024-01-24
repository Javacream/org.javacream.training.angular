import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-delete',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './people-delete.component.html',
  styleUrl: './people-delete.component.css'
})
export class PeopleDeleteComponent {
  constructor(readonly peopleService:PeopleService){}
  idInputForm = new FormGroup({
    id: new FormControl('', Validators.compose([Validators.required]))
  })

  delete(){
    this.peopleService.delete(Number(this.idInputForm.value.id))
  }
}
