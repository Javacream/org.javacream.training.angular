import { Component, OnInit, Input } from '@angular/core';
import {Person} from '../../model/people'
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent{
  @Input() person:Person


}
