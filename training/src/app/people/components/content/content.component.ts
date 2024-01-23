import { Component } from '@angular/core';
import { PeopleListComponent } from '../people-list/people-list.component';
import { PeopleInputComponent } from '../people-input/people-input.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PeopleListComponent, PeopleInputComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
