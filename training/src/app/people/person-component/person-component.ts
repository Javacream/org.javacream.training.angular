import { Component, Input} from '@angular/core';
import { Person } from '../person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person',
  imports: [CommonModule],
  templateUrl: './person-component.html',
  styleUrl: './person-component.css'
})
export class PersonComponent {
  @Input() person?:Person
  @Input() detail?:boolean
}
