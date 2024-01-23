import { Component } from '@angular/core';

@Component({
  selector: 'app-people-input',
  standalone: true,
  imports: [],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.css'
})
export class PeopleInputComponent {
  save(){
    console.log("save action")
  }

}
