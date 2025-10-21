import { Component, Input} from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  imports: [],
  templateUrl: './person-component.html',
  styleUrl: './person-component.css'
})
export class PersonComponent {
  @Input() person?:Person

}
