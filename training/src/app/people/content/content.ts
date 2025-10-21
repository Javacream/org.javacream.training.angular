import { Component } from '@angular/core';
import { PeopleList } from '../people-list/people-list';

@Component({
  selector: 'app-content',
  imports: [PeopleList],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
