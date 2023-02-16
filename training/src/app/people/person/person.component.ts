import { Component, Input } from '@angular/core';
import { PersonIF } from '../model/people.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {

  @Input() person?:PersonIF
  @Input() detail = false

}
