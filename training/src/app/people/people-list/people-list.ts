import { Component } from '@angular/core';

@Component({
  selector: 'app-people-list',
  imports: [],
  templateUrl: './people-list.html',
  styleUrl: './people-list.css'
})
export class PeopleList {
  peopleList = ['Hugo', 'Emil', 'Hannah']
}
