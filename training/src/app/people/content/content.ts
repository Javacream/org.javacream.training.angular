import { Component } from '@angular/core';
import { PeopleList } from '../people-list/people-list';
import { PersonInput } from '../person-input/person-input';

@Component({
  selector: 'app-content',
  imports: [PeopleList, PersonInput],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class Content {

}
