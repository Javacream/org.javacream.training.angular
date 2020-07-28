import { Component, OnInit, Input } from '@angular/core';
import {user} from '../../../ApplicationContext'
@Component({
  selector: 'app-people-content',
  templateUrl: './people-content.component.html',
  styleUrls: ['./people-content.component.css']
})
export class PeopleContentComponent implements OnInit {
  @Input() company

  person = user
  constructor() { }

  ngOnInit(): void {
    console.log(this.company)
  }

}
