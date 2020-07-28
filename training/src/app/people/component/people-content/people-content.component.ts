import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-people-content',
  templateUrl: './people-content.component.html',
  styleUrls: ['./people-content.component.css']
})
export class PeopleContentComponent implements OnInit {
  @Input() company
  constructor() { }

  ngOnInit(): void {
  }

}
