import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  save(){
    console.log("save action, lastname=" + this.inputLastname + ", firstname=" + this.inputFirstname)
  }

}
