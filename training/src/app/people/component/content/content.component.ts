import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../model/people';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() people:Array<Person>

  constructor() { }

  ngOnInit(): void {
  }


}
