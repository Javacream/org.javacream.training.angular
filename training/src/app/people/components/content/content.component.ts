import { Component } from '@angular/core';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [PeopleListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
