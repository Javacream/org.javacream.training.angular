import { Component, Input } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { Person } from '../../model/people';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  @Input()
  person?: Person

}
